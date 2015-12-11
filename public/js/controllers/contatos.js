angular.module('contatooh')
.controller('ContactsController', ['$scope', '$resource',
function($scope, $resource){
    $scope.contacts = [];
    $scope.message = {text: ''};

    var Contact = $resource('/contacts/:id');

    function searchContacts() {
        Contact.query(function(data){
            $scope.contacts = data;
        },
        function(error){
            $scope.message.text = 'Não foi possível buscar os contatos';
            console.error(error);
        });
    };
    searchContacts();

    $scope.remove = function(contact){
        Contact.delete({id: contact._id}).$promise
            .then(searchContacts)
            .catch(function(error){
                $scope.message.text = 'Não foi possível remover o contato';
                console.error(error)
            });
    };
}]);
