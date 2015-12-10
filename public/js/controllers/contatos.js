angular.module('contatooh')
.controller('ContatosController', ['$scope', '$resource',
function($scope, $resource){
    $scope.contatos = [];

    var Contato = $resource('/contatos/:id');

    function buscaContatos() {
        Contato.query(function(data){
            console.log(data)
            $scope.contatos = data;
        },
        function(error){
            console.log(error)
        });
    };
    buscaContatos();
}]);
