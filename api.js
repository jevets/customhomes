const createClient = require('@sanity/client')
const imageUrlBuilder = require('@sanity/image-url')

const sanityClient = createClient({
  projectId: '5x38adbv',
  dataset: 'production',
  useCdn: false,
})

exports.sanityClient = sanityClient

const builder = imageUrlBuilder(sanityClient)

exports.urlFor = (source) => {
  return builder.image(source)
}
