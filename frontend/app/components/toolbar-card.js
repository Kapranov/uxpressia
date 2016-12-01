import Ember from 'ember';

export default Ember.Component.extend({
  click: function(event){
    var elem = Ember.$(event.target);
    if(elem.is('li')) {
      this.$('li').removeClass('active');
      elem.addClass('active');
    }
  }
});
