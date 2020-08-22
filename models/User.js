const {Schema, model, Types} = require('mongoose');

const UserSchema = new Schema({
    //required:true, - важное unique: true - уникальное поле в базе
    // links:[{type:Types.ObjectId, ref:'Link'}] - обращение пользователя к определенным свойсвам (get, post put...) 
    email: {type:String, required:true, unique: true},
    password: {type:String, required:true},
    links:[{type:Types.ObjectId, ref:'Link'}]
});

module.exports = model('User', UserSchema);