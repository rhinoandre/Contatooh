 module.exports = function(app){
     var controller = app.controllers.contato;

     app.get('/contatos', controller.listContacts);
     app.get('/contatos/:id', controller.getContacts);
 };
