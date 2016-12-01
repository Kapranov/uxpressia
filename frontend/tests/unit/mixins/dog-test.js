import Ember from 'ember';
import DogMixin from 'frontend/mixins/dog';
import { module, test } from 'qunit';

module('Unit | Mixin | dog');

// Replace this with your real tests.
test('it works', function(assert) {
  let DogObject = Ember.Object.extend(DogMixin);
  let subject = DogObject.create();
  assert.ok(subject);
});
