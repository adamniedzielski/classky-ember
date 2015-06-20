import Ember from 'ember';

export default Ember.Component.extend({
  spotify: Ember.inject.service(),

  spotifyUrl: function () {
    this.get('spotify').getUrl(this.get("model.artist.name"), this.get('model.title')).
      then(url => {
        this.set('spotifyUrl', url);
      });

    return null;
  }.property()
});
