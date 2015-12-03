app.controller('PlayerCtrl', function($scope, $rootScope, PlayerFactory){
  // main toggle
  $scope.toggle = function (song) {
    if (PlayerFactory.isPlaying()) PlayerFactory.pause();
    else {
      if (song === PlayerFactory.getCurrentSong()) {
          PlayerFactory.resume();
      }
      else {
          PlayerFactory.start(song); 
      }
    }

    $scope.playing = PlayerFactory.isPlaying;
    $scope.currentSong = PlayerFactory.getCurrentSong;
  };

  $scope.playing = PlayerFactory.isPlaying;
  $scope.currentSong = PlayerFactory.getCurrentSong;
});
