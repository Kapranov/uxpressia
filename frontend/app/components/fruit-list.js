import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['fruit'],
  init() {
    this._super(...arguments);
    // this.arrayOfFruit = ['apple', 'cherry', 'orange', 'grape'];
    this.arrayOfFruit = Ember.String.w(this.attrs.fruit);
  },
  // arrayOfFruit: ['apple', 'cherry', 'orange', 'grape'],

  actions: {
    add(val) {
      this.get('arrayOfFruit').pushObject(val);
    }
  }
});
