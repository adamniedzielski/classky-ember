export function initialize(container, application) {
  application.inject('controller', 'spotifyService', 'service:spotify');
}

export default {
  name: 'spotify-service',
  initialize: initialize
};
