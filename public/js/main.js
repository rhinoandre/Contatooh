angular.module('contatooh', ['ngRoute', 'ngResource'])
.config(function($routeProvider, $httpProvider){
    $httpProvider.interceptors.push('Interceptor');

    $routeProvider
        .when('/auth', {
            templateUrl: 'partials/auth.html'
        })
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
});
