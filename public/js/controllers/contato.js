angular.module('contatooh')
.controller('ContactController', ['$scope', '$routeParams', '$resource',
function($scope, $routeParams, $resource){
    $scope.message = {text: ''};
    var Contact = $resource('/contacts/:id');

    if($routeParams.id) {
        Contact.get({id: $routeParams.id}).$promise
            .then(function (data) {
                $scope.contact = data;
            })
            .catch(function (error) {
                $scope.message = {text: 'Não foi possível encontrar o contato'};
                console.error(error);
            });
    } else {
        $scope.contact = new Contact();
    }

    $scope.save = function(){
        $scope.contact.$save($scope.contact)
            .then(function(data){
                $scope.message = {text: 'Contato salvo'};
                $scope.contact = new Contact();
            })
            .catch(function(error){
                $scope.message = {text: 'Não foi possível salvar o contato'};
                console.error(error);
            });
    };
}]);
