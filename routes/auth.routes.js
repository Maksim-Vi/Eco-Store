const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {Router} = require('express')
const router = Router()
const config = require('config')
const {check, validationResult} = require('express-validator')

// auth/login
router.post('/login', 
    [
    check('email','Введите корректный email').normalizeEmail().isEmail(),
    check('password', 'Введите пароль').exists()
    ],
    async (req, res)=>{
    try {
        const error = validationResult(req)
        if (!error.isEmpty()){
            return res.status(400).json({
                errors: error.array(),
                message: 'Некорректные данные при входе в систему'
            })
        }
        const {email, password} = req.body 
        const user = await User.findOne({email})
            if(!user){
                return res.status(400).json({message:'Пользователь не найден'})
            }
        const isMach = await bcrypt.compare(password, user.password)
            if(!isMach){
                return res.status(400).json({message: 'Некорректные данные, попробуйте снова!'})
            }
        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            {expiresIn: '1h'}
        )

        res.json({token, userId: user.id})


    } catch (err) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова!'})
    }
})

// auth/register
router.post('/register', 
    [
    check('email','Некорректные данные, попробуйте снова!').isEmail(),
    check('password', 'Минимальная длинна пароля 6 символов').isLength({min:6})
    ],
    async (req, res)=>{
    try {
        const error = validationResult(req)
        if (!error.isEmpty()){
            return res.status(400).json({
                errors: error.array(),
                message: 'Некорректные данные при ригестрации'
            })
        }

        const {email, password} = req.body
        const checkUser = await User.findOne({email})
            if(checkUser){
                return res.status(400).json({message:'Такой пользователь уже существует'})
            }
        // bcrypt.hash(password, 12) - хеширование пароля 12 что бы сильнее захешировать
        const hashPasword = await bcrypt.hash(password, 12)
        const user = new User({email, password: hashPasword})
        console.log('user:', user);
        await user.save()
        res.status(201).json({message: 'Пользователь создан'})

    } catch (err) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова!'})
    }
})

module.exports = router