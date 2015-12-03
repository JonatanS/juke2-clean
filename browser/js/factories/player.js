app.factory('PlayerFactory', function($q, $rootScope){
	var audio = document.createElement('audio');
	audio.addEventListener('timeupdate', function() {
		var curTime = playerObj.getProgress();
		console.log(curTime);
		$rootScope.progress = curTime;
		$rootScope.$digest();
	})
	var playerObj = {};
	var playing = false;
	var currentSong = null;


	playerObj.start = function(song){
		// stop existing audio (e.g. other song) in any case
	    playing = true;
	    // resume current song
	    // enable loading new song
	    currentSong = song;
	    audio.src = song.audioUrl;
	    audio.load();
	    audio.play();
	};
	playerObj.pause = function(){
		audio.pause();
    	playing = false;
	};
	playerObj.resume = function(){
		playing = true;
		audio.play();
	};
	playerObj.isPlaying = function(){
		return playing;
	};
	playerObj.getCurrentSong = function(){
		return currentSong;
	};
	playerObj.next = function(){
		$rootScope.skip(1);
	};
	playerObj.previous = function(){
		$rootScope.skip(-1);
	}; 
	playerObj.getProgress = function(){
		return 100 * audio.currentTime / audio.duration;
	};



	return playerObj;
})