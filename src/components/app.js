angular.module('video-player')

.component('app', {
  templateUrl: '../src/templates/app.html',
  controller: function() {
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];

    this.handleVideoEntryClick = function(selectedVideo) {
      console.log('this is ', this);
      console.log("the selectedVideo is ", selectedVideo);
      this.currentVideo = selectedVideo;
    }.bind(this);
  }
})
