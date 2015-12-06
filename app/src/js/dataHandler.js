bingoApp.factory('dataHandler', ['$q', 'getData',
    function($q, getData) {

 		var bingo = getData;

    	return {

    		get: function(){

    			if(!this.test())
    				return bingo;

    			if(!localStorage.bingo || localStorage.bingo.length <= 2)
    				return bingo;

    			var deferred = $q.defer(),
    				localData = JSON.parse(localStorage.bingo);

    			deferred.resolve(localData);
    			return deferred.promise;
    		},
    		set: function(data){
    			localStorage.setItem('bingo', angular.toJson(data));
    		},
    		test: function(){
    			return localStorageTest();
    		}

    	};

    }
]);