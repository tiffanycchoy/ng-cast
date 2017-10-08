angular.module('video-player')

.component('videoListEntry', {
  // TODO
  bindings: {
    video: '<',
    handleClick: '<'
  },
  templateUrl: '../src/templates/videoListEntry.html'
})
