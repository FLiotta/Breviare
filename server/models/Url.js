const mongoose = require('mongoose');
const shortid = require('shortid');

var Url = mongoose.model('urls', {
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

module.exports = {Url};