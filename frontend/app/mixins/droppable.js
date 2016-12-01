import Ember from 'ember';

const { set } = Ember;

export default Ember.Mixin.create({
  classNames: ['droppable-demo'],
  classNameBindings: ['isDropOver'],

  dragEnter() {
    set(this, 'isDropOver', true);
  },

  dragLeave() {
    set(this, 'isDropOver', false);
  },

  dragOver(event) {
    event.preventDefault();
  },

  drop(event) {
    // let dragData = JSON.parse(event.dataTransfer.getData('text/data'));
    // let draggedView = Ember.view[dragData.elementId];
    // draggedView.wasDroppedOn(this);
    let dragData = event.dataTransfer.getData('text/data');
    this.sendAction('dropped', dragData);

    set(this, 'isDropOver', false);
    set(this, 'didReceiveDrop', true);
    // set(this, 'draggedName', dragged.get('name') );
  }
});
