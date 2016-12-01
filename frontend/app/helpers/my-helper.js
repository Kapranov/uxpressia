import Ember from 'ember';

export function myHelper(params) {
  return params;
}

export default Ember.Helper.helper(function(params) {
  let [arg1, arg2] = params;

  console.log(arg1); // => "hello"
  console.log(arg2); // => "world"
});
