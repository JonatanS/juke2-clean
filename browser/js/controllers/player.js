app.controller('PlayerCtrl', function($scope, $rootScope, PlayerFactory){
 
     $scope.toggle = function (song) {
    if ($scope.playing) PlayerFactory.pause();
    else {
      if (song === PlayerFactory.getCurrentSong()) {
          PlayerFactory.resume();
      }
      else {
          PlayerFactory.start(song)
      }
    }
  }

});
