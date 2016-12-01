import Ember from 'ember';
import DraggableMixin from '../mixins/draggable';

export default Ember.Component.extend(DraggableMixin, {
  templateName        : 'draggable-demo',
});
