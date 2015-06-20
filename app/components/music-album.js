import Ember from 'ember';

export default Ember.Component.extend({
  spotifyUrl: function () {
    this.spotifyService.getUrl(this.model.get("artist.name"), this.model.get('title')).
      then(url => {
        this.set('spotifyUrl', url);
      });

    return null;
  }.property()
});
