import Ember from 'ember';

const { inject } = Ember;

export default Ember.Component.extend({
  flashMessages: inject.service(),

  name: 'Birdie McBird',

  actions: {

    fly: function() {
      alert("I'm flying, la la");
      this.get('flashMessages').success('Birdie McBird flying, la la');
    },

    speak: function() {
      alert('Tweet');
      this.get('flashMessages').danger('Tweet is working!');
    }
  }
});
