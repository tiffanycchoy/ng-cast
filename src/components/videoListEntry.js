angular.module('video-player')
.component('videoListEntry', {
  // TODO
  bindings: {
    videos: '<',
    video: '<'
  },
  templateUrl: '../src/templates/videoListEntry.html'
})
