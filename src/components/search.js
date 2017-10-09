angular.module('video-player')

.component('search', {
  // TODO
  bindings: {
    handleSearchTerm: "<",
    handleSearchButton: "<"
  },
  templateUrl: '../src/templates/search.html'
});
