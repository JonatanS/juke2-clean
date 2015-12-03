app.controller('AlbumCtrl', function($scope, $http, $rootScope, StatsFactory, PlayerFactory) {


  // load our initial data
  $http.get('/api/albums/')
  .then(res => $http.get('/api/albums/' + res.data[1]._id))
  .then(res => res.data)
  .then(album => {
    album.imageUrl = '/api/albums/' + album._id + '.image';
    album.songs.forEach(function(song){
      song.audioUrl = '/api/songs/' + song._id + '.audio';
    });
    $scope.album = album;
    StatsFactory.totalTime(album)
    .then(function(albumDuration){
      $scope.fullDuration = albumDuration;
    });
  }).catch(console.error.bind(console));


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

  //move to album controller
  $rootScope.skip = function(val){
    var thisSong = PlayerFactory.getCurrentSong();
    if (!thisSong) return;
    
    var idx = $scope.album.songs.indexOf(thisSong);
    if(val + idx > $scope.album.songs.length-1) idx = 0;
    else if(val + idx < 0) idx = $scope.album.songs.length-1;
    else idx += val;

    PlayerFactory.start($scope.album.songs[idx]);
  };


  //emitters and listeners:

    $rootScope.$on("viewAlbums", function(){
      $scope.showAlbums = !$scope.showAlbums;
      console.log($scope.showAlbums);
    })


});
