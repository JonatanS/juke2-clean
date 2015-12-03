app.controller('LibraryCtrl', function($scope, $rootScope) {
	$scope.showAlbums = true;

    $rootScope.$on("viewAlbums", function(){
      $scope.showAlbums = !$scope.showAlbums;
      console.log($scope.showAlbums);
    })


});