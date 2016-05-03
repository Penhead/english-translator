var app = angular.module('translator', []);

app.controller('WordDisplay', ['$scope', '$http', function($scope, $http){
	$scope.hasResults = false;

  $http.get('http://english-english-api.herokuapp.com/api/words')
       .success(function(data, status, headers, config) {
          $scope.wordList = data;
       });

  $scope.search = function(query) {
	  if(query != null){
		 $http.get('http://english-english-api.herokuapp.com/api/words/' + query)
         .success(function(data, status, headers, config) {
			 $scope.hasResults = true;
			 console.log(data);
			if(data.length > 0){
				$scope.wordList = data;
			}
         }); 
	  }
  }

  $scope.random = function() {
    $http.get('http://english-english-api.herokuapp.com/api/words/random')
         .success(function(data, status, headers, config) {
			console.log(data)
            $scope.wordList = data;
         });
  }
  
  
}]);