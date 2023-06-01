import { module, test } from 'qunit';
import { setupRenderingTest } from 'geographic-data-explorer/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | country-detail-table', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<CountryDetailTable />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <CountryDetailTable>
        template block text
      </CountryDetailTable>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
