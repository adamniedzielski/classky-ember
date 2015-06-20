import Ember from 'ember';

export default Ember.Route.extend({
  musicBrainz: Ember.inject.service(),

  model: function (params) {
    return this.get('musicBrainz').getArtist(params.artist_id);
  }
});
