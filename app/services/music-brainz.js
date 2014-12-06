import Ember from 'ember';

var BASE_URL = 'http://musicbrainz.org/ws/2/artist/';

export default Ember.Object.extend({
  getArtist: function (id) {
    var params = {
      inc: 'release-groups',
      fmt: 'json'
    };

    return Ember.$.getJSON(BASE_URL + id, params)
      .then(processResponse);
  }
});

function processResponse(data) {
  var albums = _.map(data['release-groups'], function (album) {
    return { title: album.title };
  });

  return {
    name: data.name,
    albums: albums
  };
}
