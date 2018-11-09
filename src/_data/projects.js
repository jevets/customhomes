const api = require('../../api').sanityClient

module.exports = async function () {
  return await api.fetch(`*[_type == "project"] | order(title)`)
}
