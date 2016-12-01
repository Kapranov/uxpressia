import Ember from 'ember';
import DogMixin from '../mixins/dog';

export default Ember.Component.extend(DogMixin, {
  classNames: ['dog-card'],
  classNameBindings: ['enteredViewport:entered-viewport']
});
