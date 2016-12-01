import Ember from 'ember';

const { computed, inject } = Ember;

export default Ember.Component.extend({
  flashMessages: inject.service(),

  reversedFlashQueue: computed('flashMessages.arrangedQueue.[]', function() {
    return this.get('flashMessages.arrangedQueue').reverse();
  }),

  overDiv: false,
  actions: {
    over: function() {
      this.toggleProperty('overDiv');
      this.get('flashMessages').info('I got message!');
    },
    out: function() {
      this.toggleProperty('overDiv');
    }
  }
});
