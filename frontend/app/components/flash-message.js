import Ember from 'ember';

const { inject, get } = Ember;

export default Ember.Component.extend({
  flashMessages       : inject.service(),
  classNames          : [ 'alert', 'flashMessage', 'alert-box' ],
  classNameBindings   : [ 'alertType' ],
  attributeBindings   : [ 'dataAlert:data-alert' ],
  dataAlert           : '',

  didInsertElement: function() {
    this.$().fadeIn(1000);
  },

  alertType: Ember.computed('flash.type', function() {
    var flashType = get(this, 'flash.type');

    return 'alert-' + flashType;
  }),

  click: function() {
    this._destroyFlashMessage();
  },

  // private
  // _destroyOnTeardown: on('willDestroyElement', function() {
  //   this._destroyFlashMessage();
  // }),

  _destroyFlashMessage: function() {
    var flash = get(this, 'flash');

    flash.destroyMessage();
  }

});
