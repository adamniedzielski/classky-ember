import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import {
  activateLastFMFixture,
  activateMusicBrainzFixture,
  activateSpotifyFixture } from '../helpers/fixtures';

var App;

module('Acceptance: ViewArtistPage', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('displays artist name, his albums and links to Spotify', function(assert) {
  activateLastFMFixture();
  activateMusicBrainzFixture();
  activateSpotifyFixture();

  visit('/');

  click(':contains("Jacquie Lee")');

  andThen(function() {
    assert.equal(find('h2.artist-name').text().trim(), 'Jacquie Lee');
    assert.equal(find('ul.albums li').length, 3);
    var album = find('ul.albums li:first').text();
    assert.ok(album.indexOf("And I Am Telling You I’m Not Going (The Voice Performance)") !== -1);
    assert.equal(find('a.spotify:first').attr("href"), "http://open.spotify.com/album/0Wgo9Ck79lWB8IJf3hpYfd");
  });
});
