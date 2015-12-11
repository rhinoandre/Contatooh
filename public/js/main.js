angular.module('contatooh', ['ngRoute', 'ngResource'])
.config(['$routeProvider',
function($routeProvider){
    $routeProvider
        .when('/contatos', {
            templateUrl: 'partials/contatos.html',
            controller: 'ContactsController'
        })
        .when('/contato/:id', {
            templateUrl: 'partials/contato.html',
            controller: 'ContactController'
        })
        .when('/contato', {
            templateUrl: 'partials/contato.html',
            controller: 'ContactController'
        })
        .otherwise({redirectTo: '/contatos'});
}]);
