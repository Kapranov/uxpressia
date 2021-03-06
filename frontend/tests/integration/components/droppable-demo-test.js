import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('droppable-demo', 'Integration | Component | droppable demo', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{droppable-demo}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#droppable-demo}}
      template block text
    {{/droppable-demo}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
