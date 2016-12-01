import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  sortedReviews: Ember.computed.sort('reviews', 'sortDefinition'),
  sortBy: 'date',
  reverseSort: false,
  // sortDefinition: ['date'],
  // sortDefinition: Ember.computed('sortBy', function() {
  //   return [ this.get('sortBy') ];
  // }),
  sortDefinition: Ember.computed('sortBy', 'reverseSort', function() {
    let sortOrder = this.get('reverseSort') ? 'desc' : 'asc';
    return [ `${this.get('sortBy')}:${sortOrder}` ];
  })
});
