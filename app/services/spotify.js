import Ember from 'ember';
import request from 'ic-ajax';

var BASE_URL = 'http://ws.spotify.com/search/1/album.json';

export default Ember.Object.extend({
  getUrl: function (artist, album) {
    var params = {
      q: [artist, album].join(' ')
    };

    return request({ url: BASE_URL, data: params })
      .then(processResponse);
  }
});

function processResponse(data) {
  var bestMatch = _.first(data.albums);

  if (bestMatch) {
    var albumId = _.last(bestMatch.href.split(':'));
    return 'http://open.spotify.com/album/' + albumId;
  }
  else {
    return undefined;
  }
}
