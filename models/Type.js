var mongoose = require('mongoose');

var typeSchema = new mongoose.Schema({
    name : String,
    color : {
        type : String,
        default : 'red'
    }
});

typeSchema.virtual('clients',{
    ref : 'Client',
    localField: '_id',
    foreignField: 'types'
});


var Type = mongoose.model('Type', typeSchema);

module.exports = Type;