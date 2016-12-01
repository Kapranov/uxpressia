import Ember from 'ember';
import FlashObject from 'ember-cli-flash/flash/object';

export function flashMessage(params) {
  return params;
}

FlashObject.reopen({ _setInitialState: null });
export default Ember.Helper.helper(flashMessage);
