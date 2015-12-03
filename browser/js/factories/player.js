app.factory('PlayerFactory', function($q, $rootScope){
	var audio = document.createElement('audio');
	audio.addEventListener('timeupdate', function() {
		var curTime = playerObj.getProgress();
		$rootScope.progress = curTime;
		$rootScope.$digest();
	})
	var playerObj = {};
	playerObj.playing = false;
	playerObj.currentSong;

	playerObj.start = function(song){
		// stop existing audio (e.g. other song) in any case
	   	this.pause();
	    this.playing = true;
	    // resume current song
	    if (song === this.currentSong) return audio.play();
	    // enable loading new song
	    this.currentSong = song;
	    audio.src = song.audioUrl;
	    audio.load();
	    audio.play();
	};
	playerObj.pause = function(){
		audio.pause();
    	this.playing = false;
	};
	playerObj.resume = function(){
		this.playing = true;
		audio.play();
	};
	playerObj.isPlaying = function(){
		return this.playing;
	};
	playerObj.getCurrentSong = function(){
		return this.currentSong;
	};
	playerObj.next = function(){
		skip(1);
	};
	playerObj.previous = function(){
		skip(-1);
	}; 
	playerObj.getProgress = function(){
		$rootScope.$digest()
		100 * audio.currentTime / audio.duration;
	};
	//move to album controller
	// playerObj.skip = function(val){
	// 	if (!this.currentSong) return;
	//     var idx = $scope.album.songs.indexOf($scope.currentSong);
	//     idx = mod( (idx + (val || 1)), $scope.album.songs.length );
	// 	start($scope.album.songs[idx]);
	// 	};


	return playerObj;
})