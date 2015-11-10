var bingoApp = angular.module('bingoApp', ['ngSanitize', 'ngRoute', 'bingoControllers']);

var bingoControllers = angular.module('bingoControllers', []);

bingoApp.config(['$routeProvider', function ($routeProvider){
	$routeProvider.
	when('/:name', {
		templateUrl: 'partials/bingo.html',
		controller: 'bingoCtrl'
	}).
	otherwise({
		redirectTo: '/'
	});
}]);