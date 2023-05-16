const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //space를 없애줌
        unique: 1
    },
    password: {
        type: String,
        maxlength: 50
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: { //유효성 관리
        type: String
    },
    tokenExp: { //token 사용할 수 있는 기간
        type: Number
    }

})

const User = mongoose.model('User', userSchema)

module.exports = {User} //다른 곳에서도 user 모델을 사용할 수 있게 export함.