angular.module('contatooh')
.controller('ContatoController', ['$scope', '$routeParams',
function($scope, $routeParams){
    console.log($routeParams.contatoId);
}]);
