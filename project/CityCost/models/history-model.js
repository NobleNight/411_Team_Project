const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//mongoose.Promise = require('bluebird');
const histSchema = new Schema({
    userId: String,
    queryDate: String,
    city: String,
    output: String

});

const History = mongoose.model('hist', histSchema);

module.exports = History;