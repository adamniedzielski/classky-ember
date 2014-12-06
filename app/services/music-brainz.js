import Ember from 'ember';
import Album from '../models/album';
import Artist from '../models/artist';

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
  var artist = Artist.create({ name: data.name });

  var albums = _.map(data['release-groups'], function (album) {
    return Album.create({ title: album.title, artist: artist });
  });

  artist.set('albums', albums);

  return artist;
}
