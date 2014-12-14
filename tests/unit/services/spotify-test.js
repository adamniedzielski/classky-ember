import {
  moduleFor,
  test
} from 'ember-qunit';
import { activateSpotifyFixture } from '../../helpers/fixtures';

moduleFor('service:spotify', 'SpotifyService', { });

test('returns Spotify URL', function() {
  var service = this.subject();
  activateSpotifyFixture();

  return service.getUrl('Jacquie Lee', 'Angel (The Voice Performance)').then(function (result) {
    equal(result, "http://open.spotify.com/album/0Wgo9Ck79lWB8IJf3hpYfd");
  });
});
