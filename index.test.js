let postcss = require('postcss')

let plugin = require('./')

async function run (input, output) {
  let result = await postcss([plugin]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it('adds transform component', async () => {
  await run('.dark[_ng-content-1] .test[_ng-content-1] {}', '.dark .test[_ng-content-1] {}')
})

it('ignores not encapsulated class', async () => {
  await run('.dark .test[_ng-content-1] {}', '.dark .test[_ng-content-1] {}')
})
