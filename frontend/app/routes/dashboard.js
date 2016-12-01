import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      'widget #1',
      'widget #2',
      'widget #3',
      'widget #4',
      'widget #5',
      'widget #6',
      'widget #7',
      'widget #8',
      'widget #9'
    ];
  }
});
