import Ember from 'ember';

var QUEUE_WIDTH = 235;

export default Ember.Mixin.create({
  classNames          : ['draggable-demo'],
  classNameBindings   : ['isDragging'],
  attributeBindings   : ['draggable', 'style'],
  draggable           : "true",
  color               : "#ccc",
  queueIndex          : 1,

  style: function() {
    let leftOffset = this.get('queueIndex') * QUEUE_WIDTH;
    return Ember.String.htmlSafe("left: " + leftOffset + "px");
  }.property('queueIndex'),

  doubleClick: function() {
    alert("DoubleClickableComponent was clicked!");
    // Ember.Logger.info("DoubleClickableComponent was clicked!");
    return true;
  },

  backgroundColorStyle: Ember.computed(function() {
    // return Ember.String.htmlSafe("background-color: " + this.get('color'));
    // return 'background-color: %@;'.replace(this.get('color')).htmlSafe();
    return Ember.String.htmlSafe('background-color: %@1;'.loc(this.get('color')));
  }).property('color'),

  test: Ember.computed(function() {
    return new Ember.String.htmlSafe('<b>, $</b>');
  }),

  newTest: Ember.computed(function() {
    let color = this.get('color');
    return Ember.String.htmlSafe("color: " + color);
  }),

  dragStart(event) {
    let dragData = { elementId: this.get('elementId') };

    this.set('isDragging', true);

    // event.dataTransfer.setData(
    //   'application/json', JSON.stringify( dragData )
    // );

    // return event.dataTransfer.setData(
    //   'text/data',
    //   get(this, 'content')
    // );

    return event.dataTransfer.setData(
      'text/data',
      JSON.stringify( dragData )
    );

    // let id = event.dataTransfer.getData('text/data');
    // this.sendAction('action', id);

    // let dragData = { elementId: this.get('elementId') };
    // event.dataTransfer.setData(
    //   'application/json', JSON.stringify( dragData )
    // );
  },

  dragEnd() {
    this.set('isDragging', false);
  },

  // our custom method,
  // not an html5 drag-n-drop
  // api or ember view event method.
  wasDropped(dropped) {
    this.set('wasDropped', true);
    this.set('droppedName', dropped.get('name'));
  }
});
