import Ember from 'ember';
import TABLE_OF_USERS from '../utils/table-of-users';

export default Ember.Route.extend({
  model() {
    // return {dog:'cow',colors:[{color:'green'},{color: 'blue'}, {color:'yellow'}]};
    return {
      tableOfUsers: TABLE_OF_USERS
    };
  },
  setupController(controller, model) {
    controller.set('model', model);
  }
});
