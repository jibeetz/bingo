bingoApp.factory('getData', ['$http',
    function($http) {
        return $http.get('data/data.json');
    }
]);