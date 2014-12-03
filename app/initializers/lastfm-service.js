export function initialize(container, application) {
  application.inject('route', 'lastfmService', 'service:lastfm');
}

export default {
  name: 'lastfm-service',
  initialize: initialize
};
