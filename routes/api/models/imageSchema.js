const mongoose = require('mongoose')
const schema = mongoose.Schema;
const imageSchema = new schema({
Name:{
    type:String,
    required:true
},
Image:{
    Url:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    }
},
UserId:{
    type:String,
    required:true
}
});

const image = mongoose.model('image',imageSchema);
module.exports = image;