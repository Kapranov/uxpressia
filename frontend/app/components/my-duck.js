import Ember from 'ember';

export default Ember.Component.extend({
  name: 'Ducky McQuack',
  actions: {
    fly: function() {
      alert("I can't flying");
    },
    speak: function() {
      alert('Quack!');
    },
    waddle: function() {
      alert('Waddle waddle!');
    }
  }
});
