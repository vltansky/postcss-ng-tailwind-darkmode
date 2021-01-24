module.exports = () => {
  return {
    postcssPlugin: 'postcss-ng-tailwind-dark',
    Rule: rule => {
      rule.selector = rule.selector.replace(
        /\.dark\[_ng-content[^\]]*]/gi,
        '.dark'
      )
    }
  }
}
module.exports.postcss = true
