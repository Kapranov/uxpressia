import Ember from 'ember';

export function dedasherize([ str = '' ]) {
  return str.replace('-', ' ');
}

export default Ember.Helper.helper(dedasherize);
