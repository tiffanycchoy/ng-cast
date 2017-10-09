angular.module('video-player')

.component('app', {
  templateUrl: '../src/templates/app.html',
  controller: function(youTube) {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    this.searchTerm = '';

    this.handleVideoEntryClick = function(selectedVideo) {
      console.log('this is ', this);
      console.log("the selectedVideo is ", selectedVideo);
      this.currentVideo = selectedVideo;
    }.bind(this);

    this.handleSearchTerm = function(searchQuery) {
      console.log('search term is ', searchQuery);
      this.searchTerm = searchQuery;
    }.bind(this);

    this.handleSearchButton = function() {
      var context = this;
      youTube.searchYouTube(this.searchTerm, function(videos) {
        context.videos = videos;
        context.currentVideo = videos[0];
      })
    }.bind(this);

  }
})
