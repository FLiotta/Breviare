const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortid = require('shortid');

const urlSchema = new Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    url: {
        type: String,
        required: true,
        minlength: 5,
        trim: true
    },
    ip: {
        type: String
    },
    createdAt: {
        type: Number,
        default: new Date().getTime()
    }
});

const Url = mongoose.model('url', urlSchema)

module.exports = Url;