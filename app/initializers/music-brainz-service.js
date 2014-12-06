export function initialize(container, application) {
  application.inject('route', 'musicBrainzService', 'service:music-brainz');
};

export default {
  name: 'music-brainz-service',
  initialize: initialize
};
