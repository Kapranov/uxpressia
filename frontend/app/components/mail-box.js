import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  classNames: 'mail-share-button',
  attributeBindings: ['data-size','data-url','data-text','data-hashtags'],

  shouldItLink: Ember.computed('m.color', function() {
    return this.get('m.color') === 'red';
  })
});
