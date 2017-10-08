angular.module('video-player')
.service('youTube', function($http){

  this.searchYouTube= function(searchTerm, callback) {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part:'snippet',
        q: searchTerm,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: true,
        type: 'video'
      }
    }).then(function successCallback(response) {
      console.log('successfully retrieved data from youtube ', response.data.items);
        callback(response.data.items);

    }, function errorCallback(response) {
      console.log('error retrieving data from youtube');
    });
  }

});
