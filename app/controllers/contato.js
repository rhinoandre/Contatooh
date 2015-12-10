module.exports = function(){
    var controller = {};
    var contatos = [
        {_id: 1, nome: 'Contato exemplo 1', email: 'conta1@email.com'},
        {_id: 2, nome: 'Contato exemplo 2', email: 'conta2@email.com'},
        {_id: 3, nome: 'Contato exemplo 3', email: 'conta3@email.com'}
    ];
    controller.listContacts = function(req, res){
        res.json(contatos);
    };

    controller.getContacts = function(req, res){
        var contato = contatos.filter(function(contato){
            return contato._id == req.params.id;
        })[0];

        contato ?
            res.json(contato):
            res.status(404).send('Contato não encontrado!');
    };

    return controller;
};
