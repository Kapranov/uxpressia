import Ember from 'ember';
import JSONAPIAdapter from 'ember-data/adapters/json-api';

const { String: { pluralize, underscore } } = Ember;

export default JSONAPIAdapter.extend({
  host: 'http://api.dev.local:3000',
  namespace: 'api/v1',
  headers: {
    'Accept': 'application/vnd.app+json;version=1',
    'Authorization': 'Token token="fdd110671210f2be353995806414f9d8"'
  },
  pathForType(type) {
    return pluralize(underscore(type));
  }

  // host: 'http://drupal/',
  // namespace: 'api/node',
  // pathForType: function() {
  //   return 'article';
  // },
  // buildURL(modelName, id, snapshot, requestType, query) {
  //   let url = this._super(modelName, id, snapshot, requestType, query);
  //   return url + "?_format=api_json";
  // }
});
