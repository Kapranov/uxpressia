import Ember from 'ember';

let DEFAULT_CODE = [
  "function foo() {",
  "  Ember.run.once(function() { console.log('FOO!'); });",
  "}",
  "",
  "function bar() {",
  "  Ember.run.schedule('afterRender', function() { console.log('BAR!'); });",
  "}",
  "",
  "Ember.run(function() {",
  "  Ember.run.schedule('render', function() {",
  "    Ember.run.scheduleOnce('sync', foo);",
  "    Ember.run.scheduleOnce('actions', bar);",
  "  });",
  "});"
].join("\n");

export default Ember.Controller.extend({
  code                : DEFAULT_CODE,
  logs                : [],
  isShowingModal      : false,

  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    }
  }
});
