import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('artist', { path: 'artists/:artist_id' });
  this.route('artists', { path: '/' });
});

export default Router;
