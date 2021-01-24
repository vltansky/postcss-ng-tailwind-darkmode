module.exports = ({darkMode}) => {
  return {
    postcssPlugin: 'postcss-ng-tailwind-dark',
    Rule: rule => {
      if(darkMode === 'class'){
        if(rule.selector.includes('.dark ')){
          let hostContextCSS = []
          for (let selector of rule.selectors) {
            if(selector.includes('.dark')){
              hostContextCSS.push(selector.replace(
                /^\.dark(\s+)/gi,
                ':host-context(.dark)$1'
              ))
            }
          }
          if(hostContextCSS.length){
            rule.selectors = rule.selectors.concat(hostContextCSS)
          }
        }
      }
    }
  }
}
module.exports.postcss = true
