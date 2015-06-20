import Ember from 'ember';
import Artist from '../models/artist';
import request from 'ic-ajax';

var BASE_URL = 'http://ws.audioscrobbler.com/2.0';
var API_KEY = 'cca4c83aff122fd01e10eb20e0cb8cf6';

export default Ember.Service.extend({
  getHypedArtists: function () {
    var params = {
      method: 'chart.gethypedartists',
      api_key: API_KEY,
      format: 'json'
    };

    return request({ url: BASE_URL, data: params }).
      then(processResponse);
  }
});

function processResponse(data) {
  var artists = _.map(data.artists.artist, buildArtist);
  artists = _.filter(artists, artistShouldHaveId);
  return artists;
}

function buildArtist(artistData) {
  var image = _.last(artistData.image)['#text'];

  return Artist.create({
    id: artistData.mbid,
    name: artistData.name,
    image: image
  });
}

function artistShouldHaveId(artist) {
  return artist.id !== undefined && artist.id.length > 0;
}
