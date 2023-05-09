const mongoose = require ('mongoose')

const schema = mongoose.Schema({
    name:String,
    password:String,
    role:String,
})
const model = mongoose.model('user',schema)

module.exports = model;