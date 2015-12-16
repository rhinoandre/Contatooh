var mongoose = require('mongoose');

module.exports = function(){
    var schema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        },
        emergency: {
            type: mongoose.Schema.ObjectId,
            ref: 'Contato'
        }
    });

    return mongoose.model('Contato', schema);
};