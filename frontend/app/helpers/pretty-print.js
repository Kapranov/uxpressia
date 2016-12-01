import Ember from 'ember';

export function prettyPrint(params) {
  return params;
}

export default Ember.Helper.helper(function(value, replacer, space) {
  return JSON.stringify(value, replacer, space);
});
