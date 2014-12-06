import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.musicBrainzService.getArtist(params.artist_id);
  }
});
