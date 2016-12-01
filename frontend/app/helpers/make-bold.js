import Ember from 'ember';

export function makeBold(params) {
  return params;
}

export default Ember.Helper.helper(function([param]) {
  let value = Ember.Handlebars.Utils.escapeExpression(param);
  return Ember.String.htmlSafe(`<b>${value}</b>`);
  // return Ember.String.htmlSafe(`<b>${param}</b>`);
});
