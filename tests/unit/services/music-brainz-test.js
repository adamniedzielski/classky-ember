import {
  moduleFor,
  test
} from 'ember-qunit';
import { activateMusicBrainzFixture } from '../../helpers/fixtures';

moduleFor('service:music-brainz', 'MusicBrainzService', { });

test('fetches album titles from MusicBrainz', function() {
  var service = this.subject();
  activateMusicBrainzFixture();

  return service.getArtist('f5cb2b4f-bfba-4bfc-9d70-82d138829717').then(function (result) {
    equal(result.name, "Jacquie Lee");
    equal(result.albums[0].title, "And I Am Telling You I’m Not Going (The Voice Performance)");
  });
});
