angular.module('contatooh')
.controller('ContactsController',
function($scope, ContactService){
    $scope.contacts = [];
    $scope.message = {text: ''};

    function searchContacts() {
        ContactService.query(function(data){
            $scope.contacts = data;
        },
        function(error){
            $scope.message.text = 'Não foi possível buscar os contatos';
            console.error(error);
        });
    };
    searchContacts();

    $scope.remove = function(contact){
        ContactService.delete({id: contact._id}).$promise
            .then(searchContacts)
            .catch(function(error){
                $scope.message.text = 'Não foi possível remover o contato';
                console.error(error)
            });
    };
});
