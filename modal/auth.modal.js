const mongoose =require('mongoose');

const loginSchema = mongoose.Schema({
    username:{ type: String ,required : true},
    password: { type : String, required: true}
},{versionKey:false});

const registerSchema = mongoose.Schema({
    email:{ type: String, required : true},
    password: { type : String, required: true},
    username: { type : String, required: true},
    isEmailVerfied: Boolean,
    profile: String,
},{versionKey:false});

const LoginModal = mongoose.model('login', loginSchema);
const RegisterModal = mongoose.model('register', registerSchema);

module.exports = {
    LoginModal,
    RegisterModal
}
