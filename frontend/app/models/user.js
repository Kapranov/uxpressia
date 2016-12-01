import DS from 'ember-data';

export default DS.Model.extend({
  name        : DS.attr('string'),
  email       : DS.attr('string'),
  bio         : DS.attr('string'),
  avatarUrl   : DS.attr('string'),
  createdAt   : DS.attr('date'),
  updatedAt   : DS.attr('date')
});
