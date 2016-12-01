import Ember from 'ember';

let dogs = [
  { id: 0, name: 'Shiba Inu'},
  { id: 1, name: 'Siberian Husky'},
  { id: 2, name: 'Labrador'},
  { id: 3, name: 'Golden Retriever'},
  { id: 4, name: 'Malamute'},
  { id: 5, name: 'Pomeranian'},
  { id: 6, name: 'Doberman'}
];

export default Ember.Route.extend({
  templateName: 'dog',
  classNames: 'customer_body',
  // renderTemplate: function() {
  //   this.render({ outlet: 'dog' });
  // },

  model() {
    return dogs;
  },

  setupController(controller, models) {
    controller.set('dogs', models);
  }
});
