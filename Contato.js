//Simple exemple about MongoDB driver
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var _idProcurado = new ObjectID('564b1dad25337263280d047c');

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh',
function(error, db){
    if(error) throw error;
    db.collection('contatos').findOne({_id: _idProcurado},
    function(error, contact){
        if(error) throw error;
        console.log(contact);
    });
});