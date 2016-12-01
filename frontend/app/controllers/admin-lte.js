import Ember from 'ember';

const { inject } = Ember;

export default Ember.Controller.extend({
  flashMessages: inject.service(),
  appName: 'EmberJS Application.',
  isShowingModal: false,

  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    },

    success() {
      this.get('flashMessages').success('Your work was saved.');
    },

    warning() {
      this.get('flashMessages').warning('You went offline. Restoring connection...');
    },

    info() {
      this.get('flashMessages').info('Did you know that cats use their tails for balance, and have nearly 30 individual bones in them?');
    },

    danger() {
      this.get('flashMessages').danger('Embarassing comment deleted.');
    },

    clearMessages() {
      this.get('flashMessages').clearMessages();
    }
  }
});
