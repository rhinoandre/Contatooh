var sanitize = require('mongo-sanitize');

module.exports = function(app){
    var controller = {},
        Contato = app.models.contato;

    controller.list = function(req, res){
        Contato.find().populate('emergency').exec()
            .then(function(contacts){
                res.json(contacts);
            },
            function(error){
                console.log(error);
                res.status(500).json(error);
            });
    };

    controller.get = function(req, res){
        var _id = sanitize(req.params.id);

        Contato.findById(_id).exec()
            .then(function(contact){
                if(!contact) throw new Error('Contact not found');
                res.json(contact);
            },
            function(error){
                console.log(error);
                res.statusCode(404).json(error);
            });
    };

    controller.remove = function(req, res){
        var _id = sanitize(req.params.id);

        Contato.remove({_id: _id}).exec()
            .then(function(){
                res.status(204).end();
            },
            function(error){
                return console.error(error);
            });
    };

    controller.save = function(req, res){
        var _id = sanitize(req.body._id);
        var contact = {
            name: req.body.name,
            email: req.body.email,
            emergency: req.body.emergency || null
        }

        if(_id){
            Contato.findByIdAndUpdate(_id, contact).exec()
                .then(function(){
                    res.json(req.body);
                },
                function(error){
                    console.error(error);
                    res.status(500).json(error);
                });
        } else {
            Contato.create(contact)
                .then(function(contact){
                    res.status(201).json(contact);
                },
                function(error){
                    console.error(error);
                    res.status(500).json(error);
                });
        }
    };

    return controller;
};
