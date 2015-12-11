angular.module('contatooh')
.factory('ContactService',['$resource',
function($resource){
    return $resource('/contacts/:id');
}]);