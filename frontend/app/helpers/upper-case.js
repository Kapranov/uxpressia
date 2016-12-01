import Ember from 'ember';

export function upperCase(params) {
  return params;
}

export default Ember.Helper.helper(function([value]) {
  return value.toUpperCase();
});
