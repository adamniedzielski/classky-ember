import Ember from 'ember';
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

test('displays artist name, his albums and links to Spotify', function() {
  activateLastFMFixture();
  activateMusicBrainzFixture();
  activateSpotifyFixture();

  visit('/');

  click(':contains("Jacquie Lee")');

  andThen(function() {
    equal(find('h2.artist-name').text().trim(), 'Jacquie Lee');
    equal(find('ul.albums li').length, 3);
    var album = find('ul.albums li:first').text();
    ok(album.indexOf("And I Am Telling You I’m Not Going (The Voice Performance)") !== -1);
    equal(find('a.spotify:first').attr("href"), "http://open.spotify.com/album/0Wgo9Ck79lWB8IJf3hpYfd");
  });
});
