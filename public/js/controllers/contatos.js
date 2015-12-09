angular.module('contatooh')
.controller('ContatosController', ['$scope', '$http',
function($scope, $http){
    $scope.total = 0;
    $scope.contatos = [];

    $scope.incrementa = function(){
        $scope.total++;
    };

    $http({method: 'GET', url: '/contatos'})
        .then(function(data){
            $scope.contatos = data.data;
            console.log(data);
        }).catch(function(error){
            console.log('Não foi possível obter a lista de contatos');
            console.log(error.statusText);
        });
}]);
