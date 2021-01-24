module.exports = () => {
  return {
    postcssPlugin: 'postcss-ng-tailwind-dark',
    Rule: rule => {
      if(rule.selector.includes('.dark ')){
        rule.selectors = rule.selectors.map(v=>v.replace(
          /\^\.dark(\s+)/gi,
          ':host-context(.dark)$1'
        ));
        }
    }
  }
}
module.exports.postcss = true
