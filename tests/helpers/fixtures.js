import { defineFixture } from 'ic-ajax';

export function activateLastFMFixture() {
    defineFixture('http://ws.audioscrobbler.com/2.0', {
    response: LASTFM
  });
}

export function activateMusicBrainzFixture() {
    defineFixture('http://musicbrainz.org/ws/2/artist/f5cb2b4f-bfba-4bfc-9d70-82d138829717', {
    response: MUSIC_BRAINZ
  });
}

export function activateSpotifyFixture() {
    defineFixture('http://ws.spotify.com/search/1/album.json', {
    response: SPOTIFY
  });
}

var LASTFM = {
  "artists": {
    "artist": [
      {
        "name": "Jacquie Lee",
        "percentagechange": "2721",
        "mbid": "f5cb2b4f-bfba-4bfc-9d70-82d138829717",
        "url": "http://www.last.fm/music/Jacquie+Lee",
        "streamable": "0",
        "image": [
          {
            "#text": "http://userserve-ak.last.fm/serve/34/98795793.png",
            "size": "small"
          },
          {
            "#text": "http://userserve-ak.last.fm/serve/64/98795793.png",
            "size": "medium"
          },
          {
            "#text": "http://userserve-ak.last.fm/serve/126/98795793.png",
            "size": "large"
          },
          {
            "#text": "http://userserve-ak.last.fm/serve/252/98795793.png",
            "size": "extralarge"
          },
          {
            "#text": "http://userserve-ak.last.fm/serve/500/98795793/Jacquie+Lee+PNG.png",
            "size": "mega"
          }
        ]
      },
      {
        "name": "Gisela",
        "percentagechange": "751",
        "mbid": "",
        "url": "http://www.last.fm/music/Gisela",
        "streamable": "0",
        "image": [
          {
            "#text": "http://userserve-ak.last.fm/serve/34/98328297.png",
            "size": "small"
          },
          {
            "#text": "http://userserve-ak.last.fm/serve/64/98328297.png",
            "size": "medium"
          },
          {
            "#text": "http://userserve-ak.last.fm/serve/126/98328297.png",
            "size": "large"
          },
          {
            "#text": "http://userserve-ak.last.fm/serve/252/98328297.png",
            "size": "extralarge"
          },
          {
            "#text": "http://userserve-ak.last.fm/serve/500/98328297/Gisela+PNG+version.png",
            "size": "mega"
          }
        ]
      }
    ]
  }
};

var MUSIC_BRAINZ = {
  "country": null,
  "ipis": [ ],
  "area": null,
  "sort-name": "Lee, Jacquie",
  "name": "Jacquie Lee",
  "disambiguation": "",
  "life-span": {
    "ended": false,
    "begin": null,
    "end": null
  },
  "end_area": null,
  "release-groups": [
    {
      "disambiguation": "",
      "first-release-date": "2013-12-16",
      "secondary-types": [ ],
      "id": "626606a8-bb77-4d3c-87b7-bba983ba57aa",
      "title": "And I Am Telling You I’m Not Going (The Voice Performance)",
      "primary-type": "Single"
    },
    {
      "disambiguation": "",
      "first-release-date": "2013-12-09",
      "secondary-types": [ ],
      "id": "8475b9ff-a12a-4a9e-9d58-387e82562974",
      "title": "Angel (The Voice Performance)",
      "primary-type": "Single"
    },
    {
      "disambiguation": "",
      "first-release-date": "2013-12-02",
      "secondary-types": [ ],
      "id": "fb7d88b1-987c-4fb1-95c2-a8e9f3395efb",
      "title": "The Voice Within (The Voice Performance)",
      "primary-type": "Single"
    }
  ],
  "id": "f5cb2b4f-bfba-4bfc-9d70-82d138829717",
  "type": "Person",
  "begin_area": null
};

var SPOTIFY = {
  "info": {
    "num_results": 1,
    "limit": 100,
    "offset": 0,
    "query": "Angel (The Voice Performance) Jacquie Lee",
    "type": "album",
    "page": 1
  },
  "albums": [
    {
      "name": "Angel (The Voice Performance)",
      "popularity": "0.19",
      "external-ids": [
        {
          "type": "upc",
          "id": "00602537821617"
        }
      ],
      "href": "spotify:album:0Wgo9Ck79lWB8IJf3hpYfd",
      "artists": [
        {
          "href": "spotify:artist:7KxuvZkTSnP8wLLfS94ykd",
          "name": "Jacquie Lee"
        }
      ],
      "availability": {
        "territories": "CA US"
      }
    }
  ]
};
