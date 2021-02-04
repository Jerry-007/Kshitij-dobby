const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const schema = mongoose.Schema;
const userSchema = new schema({
email:{
    type:String,
    required:true
    }
});

userSchema.plugin(passportLocalMongoose);

const user = mongoose.model('user',userSchema);
module.exports = user;