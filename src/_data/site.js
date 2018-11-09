const copyrightYear = new Date().getFullYear()
const urlFor = require('../../api').urlFor

module.exports = () => ({
  urlFor,

  title: 'Custom Homes of Asheville',
  copyrightYear,
})
