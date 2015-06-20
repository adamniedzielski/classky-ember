import Ember from 'ember';

export default Ember.Route.extend({
  lastfm: Ember.inject.service(),

  model: function () {
    return this.get('lastfm').getHypedArtists();
  }
});
