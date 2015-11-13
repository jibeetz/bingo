bingoControllers.controller('bingoCtrl', ['$scope', '$routeParams', 'getData', function ($scope, $routeParams, getData){

	getData.then(function(response){
		console.log(response.data);
		$scope.data = response.data;
	});

}]);