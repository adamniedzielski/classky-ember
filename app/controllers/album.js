import Ember from 'ember';

export default Ember.ObjectController.extend({
  spotifyUrl: function () {
    var model = this.get('model');

    this.spotifyService.getUrl(model.get("artist.name"), model.get('title')).
      then(function (url) {
        model.set('spotifyUrl', url);
      });

    return model.get('spotifyUrl');
  }.property('model.spotifyUrl')
});
