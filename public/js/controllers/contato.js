angular.module('contatooh')
.controller('ContactController', ['$scope', '$routeParams', 'ContactService',
function($scope, $routeParams, ContactService){
    $scope.message = {text: ''};

    if($routeParams.id) {
        ContactService.get({id: $routeParams.id}).$promise
            .then(function (data) {
                $scope.contact = data;
            })
            .catch(function (error) {
                $scope.message = {text: 'Não foi possível encontrar o contato'};
                console.error(error);
            });
    } else {
        $scope.contact = new ContactService();
    }

    $scope.save = function(){
        $scope.contact.$save($scope.contact)
            .then(function(data){
                $scope.message = {text: 'Contato salvo'};
                $scope.contact = new ContactService();
            })
            .catch(function(error){
                $scope.message = {text: 'Não foi possível salvar o contato'};
                console.error(error);
            });
    };
}]);
