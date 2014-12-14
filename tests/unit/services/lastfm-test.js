import {
  moduleFor,
  test
} from 'ember-qunit';
import { activateLastFMFixture } from '../../helpers/fixtures';

moduleFor('service:lastfm', 'LastfmService', { });

test('returns id, name and image from LastFM', function() {
  var service = this.subject();
  activateLastFMFixture();

  return service.getHypedArtists().then(function (result) {
    equal(result[0].id, "f5cb2b4f-bfba-4bfc-9d70-82d138829717");
    equal(result[0].name, "Jacquie Lee");
    equal(result[0].image, "http://userserve-ak.last.fm/serve/500/98795793/Jacquie+Lee+PNG.png");
  });
});
