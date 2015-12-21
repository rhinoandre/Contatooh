angular.module('contatooh')
.factory('ContactService',
function($resource){
    return $resource('/contacts/:id');
});