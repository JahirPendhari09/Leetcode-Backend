const mongoose =require('mongoose');

const otpSchema = mongoose.Schema({
    username:{ type: String, required: true},
    email:{ type: String, required: true},
    otp: { type: String, required: true},
    date: {type: String, required: true}
},{versionKey:false});


const OtpModal = mongoose.model('otp', otpSchema);

module.exports = {
    OtpModal
}
