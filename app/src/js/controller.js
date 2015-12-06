bingoControllers.controller('bingoCtrl', ['$scope', '$routeParams', 'getData', function ($scope, $routeParams, getData){

	getData.then(function(response){
		$scope.data = response.data;
		angular.forEach($scope.data.list, function(v, k) {
			v.points = 0;
		});
		$scope.getPointsTotal();
	});

	$scope.select = function(id, index){

		var bng = $scope.data.list[id].bingo[index];
		if(bng.isEmpty)
			return;
		bng.isSelected = (bng.isSelected) ? false : true;

		if(bng.isSelected){
			$scope.data.list[id].points += bng.points;
		}else{
			$scope.data.list[id].points -= bng.points;
		}
		$scope.getPointsTotal();
	};

	$scope.getPointsTotal = function(){
		$scope.data.points = 0;
		angular.forEach($scope.data.list, function(v, k) {
			$scope.data.points += v.points;
		});
	};

	$scope.resetPoints = function(){
		angular.forEach($scope.data.list, function(v, k) {
			v.points = 0;
			angular.forEach(v.bingo, function(w, l) {
				w.isSelected = false;
			});
		});
		$scope.getPointsTotal();
	};

}]);