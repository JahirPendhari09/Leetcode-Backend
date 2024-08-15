const mongoose =require('mongoose');

const loginSchema = mongoose.Schema({
    email:{ type: string ,required : true},
    password: { type : string, required: true}
},{versionKey:false});

const registerSchema = mongoose.Schema({
    email:{ type: string ,required : true},
    password: { type : string, required: true},
    firstName: { type : string, required: true},
    lastName: { type: string, required: true},
    profile: String,
},{versionKey:false});

const LoginModal = mongoose.model('login', loginSchema);
const RegisterModal = mongoose.model('register', registerSchema);

module.exports = {
    LoginModal,
    RegisterModal
}
