import Ember from 'ember';

export default Ember.Component.extend({
  number: 100,
  click() {
    this.attrs.pressed();
  }
});
