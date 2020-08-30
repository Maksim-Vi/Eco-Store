const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'info.ecochoice@gmail.com',
        pass: 'infoecochoice2020'
    }
});


const mailer = message => {
    transporter.sendMail(message , (err,info) => {
        if (err){
            return console.log('Error mailer: ',err)  
        }
        // console.log('Email send info:', info)
    });
}

const form = (req,res) => {
    try {
        //console.log('body', req.body);
        let message = {
            from: req.body.Email,
            to: `Mailer Test <info.ecochoice@gmail.com>` ,
            subject: 'From Eco Store',
            text: `Вам пришел заказ от:
                Имя: ${req.body.firstName},
                Фамилия: ${req.body.LastName},
                телефон: ${req.body.phone},
                Email: ${req.body.Email},

                Коментаций:
                ${req.body.subject}
                
                Данное письмо требует ответ =>  ${req.body.Email}`,
        }
        mailer(message)
        res.status(201).json({message: 'Данные успешно переданы!'})
    } catch (err) {
        res.status(500).json({massage:'Что то пошло не так, попробуйте снова',err})
    }
};

const formStore = (req,res) => {
    let item = req.body.items.map(item =>{
        return `
        <p>
            <p>id: ${item.id};</p> 
            <p>Название товара: ${item.name};</p> 
            <p>цена товара: ${item.cost} = ${item.cost * item.count};</p> 
            <p>количество: ${item.count};</p>
        </p>`
    })
    try {
        //console.log('body', req.body);
        let message = {
            from: req.body.Email,
            to: `Mailer Test <info.ecochoice@gmail.com>` ,
            subject: 'From Eco Store',

            html:`
            <h3>Вам пришел заказ от:</h3>
                <p><b>Имя:</b> ${req.body.firstName},</p>
                <p><b>телефон:</b> ${req.body.phone},</p>
                <p><b>Email:</b> ${req.body.Email},</p>
            
            <b>Товар:</b>
            <p>${item}</p>
            <b>Общая цена заказа:</b><p>${req.body.items.reduce((count, item) => {return count + item.cost * item.count}, 0)}</p>

            <h3>Данное письмо требует ответ =>  ${req.body.Email}</h3>
            `,   
        }
        mailer(message)
        res.status(201).json({message: 'Данные успешно переданы!'})
    } catch (err) {
        res.status(500).json({massage:'Что то пошло не так, попробуйте снова',err})
    }
};


module.exports = {form,formStore}