app.controller('PlayerCtrl', function($scope, $rootScope, PlayerFactory){

  $scope.playing = PlayerFactory.isPlaying;
  $scope.currentSong = PlayerFactory.getCurrentSong;

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

  $scope.next = function () {
    PlayerFactory.next();
  };
  $scope.prev = function () {
    PlayerFactory.previous();
  };

});


