import Ember from 'ember';

export default Ember.Controller.extend({
  model: function() {
    return this.get('model');
  },
  sortedItems: Ember.computed.sort('content', 'sortDefinition'),
  sortDefinition: ['color'],
  itemWidth: 545,
  itemHeight: 25,
  containerWidth: 546,
  containerHeight: 246,
  scrollLeft: 0,
  scrollTop: 0,

  actions: {
    updateContainerWidth: function(value) {
      this.set('containerWidth', parseInt(value, 10));
    },

    updateContainerHeight: function(value) {
      this.set('containerHeight', parseInt(value, 10));
    },

    normal: function() {
      this.setProperties({
        itemWidth: 545,
        itemHeight: 25,
      });
    },

    makeSquare: function() {
      this.setProperties({
        itemWidth: 100,
        itemHeight: 100,
      });
    },

    makeRow: function() {
      this.setProperties({
        itemWidth: 300,
        itemHeight: 100
      });
    },

    makeLongRect: function() {
      this.setProperties({
        itemWidth: 100,
        itemHeight: 50
      });
    },

    makeTallRect: function() {
      this.setProperties({
        itemWidth: 50,
        itemHeight: 100
      });
    }
  }
});
