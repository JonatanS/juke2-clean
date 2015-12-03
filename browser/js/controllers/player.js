app.controller('PlayerCtrl', function($scope, $rootScope, PlayerFactory){

    $scope.playing = PlayerFactory.playing;
    //$scope.currentSong = 'hello';$rootScope.currentSong;
   // console.log(PlayerFactory.currentSong);
    console.log(this);
    $scope.currentSong = PlayerFactory.getCurrentSong;
    
  //   $scope.currentSong = PlayerFactory;
  //    $scope.toggle = function (song) {
  //   if (PlayerFactory.isPlaying()) PlayerFactory.pause();
  //   else {
  //     if (song === PlayerFactory.getCurrentSong()) {
  //         PlayerFactory.resume();
  //     }
  //     else {
  //         PlayerFactory.start(song)
  //     }
  //   }
  //   $scope.playing = PlayerFactory.playing;
  //   $scope.currentSong = PlayerFactory.getCurrentSong();
  //   console.log($scope.currentSong);
  // }
  $scope.toggle = function (song) {
    if (PlayerFactory.playing) PlayerFactory.pause();
    else {
      if (song === PlayerFactory.getCurrentSong()) {
          PlayerFactory.resume();
      }
      else {
          PlayerFactory.start(song)
      }
    }
    console.log(PlayerFactory.currentSong);
    $scope.playing = PlayerFactory.playing;
    $scope.currentSong = PlayerFactory.getCurrentSong();
  }

});
