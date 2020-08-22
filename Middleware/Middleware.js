const jwt = require('jsonwebtoken');
const config = require('config')

module.exports = (req,res,next) =>{
    const auchHeader = req.get('Authorization');
    if (!auchHeader){
        res.status(401).json({message:'Token is not provide'});
    }

    const token = auchHeader.replace('','');
    try{
        jwt.verify(token,config.het('jwtSecret'));
    } catch (e){
        if(e instanceof jwt.JsonWebTokenError){
            res.status(401).json({message:'inwalid Token'});
        }
    }
    next();   
};