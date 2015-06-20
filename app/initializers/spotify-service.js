export function initialize(container, application) {
  application.inject('component', 'spotifyService', 'service:spotify');
}

export default {
  name: 'spotify-service',
  initialize: initialize
};
