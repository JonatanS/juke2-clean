app.controller('SidebarCtrl', function($scope, $rootScope) {

	$scope.viewAlbums = function() {
		console.log('clicked');
		$rootScope.$broadcast("viewAlbums");
		//$scope.showAlbums = !scope.showAlbums;
		//console.log($scope.showAlbums);
	};

	





});