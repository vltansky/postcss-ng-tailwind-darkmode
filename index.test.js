let postcss = require('postcss')

let plugin = require('./')

async function run (input, output, darkMode = 'class') {
  let result = await postcss([plugin({darkMode})]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it('should add :host-context', async () => {
  await run('.dark .test {}', '.dark .test, :host-context(.dark) .test {}')
})

it('should not add :host-context', async () => {
  await run('.dark .test {}', '.dark .test {}', 'media')
})
