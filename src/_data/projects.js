const api = require('../../api').sanityClient

module.exports = async function () {
  const query = `
    *[_type == "project"] | order(title)
  `

  return await api.fetch(query)
}
