module.exports = function(){
    var controller = {};
    var contacts = [
        {_id: 1, name: 'Contato exemplo 1', email: 'conta1@email.com'},
        {_id: 2, name: 'Contato exemplo 2', email: 'conta2@email.com'},
        {_id: 3, name: 'Contato exemplo 3', email: 'conta3@email.com'}
    ];
    var ID_CONTACT_INC = 3;

    controller.listContacts = function(req, res){
        res.json(contacts);
    };

    controller.getContacts = function(req, res){
        var contato = contacts.filter(function(contato){
            return contato._id == req.params.id;
        })[0];

        contato ?
            res.json(contato):
            res.status(404).send('Contato não encontrado!');
    };

    controller.removeContact = function(req, res){
        var idContato = req.params.id
        contacts = contacts.filter(function(contato){
            return contato._id != idContato;
        });

        res.status(204).end();
    };

    function save(contactNew){
        contactNew._id = ++ID_CONTACT_INC;

        contacts.push(contactNew);
        return contactNew;
    };

    function update(contactUpdate){
        contacts = contacts.map(function(contact){
            if(contact._id == contactUpdate._id){
                contact = contactUpdate;
            }
            return contact;
        });

        return contactUpdate;
    };

    controller.saveContact = function(req, res){
        var contact = req.body;
        contact = contact._id ?
            update(contact):
            save(contact);

        res.json(contact);
    };



    return controller;
};
