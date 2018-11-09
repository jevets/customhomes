module.exports = config => {
  config.dir = {
    input: './src',
    output: './dist',
  }

  config.addPassthroughCopy('src/robots.txt')
  config.addPassthroughCopy('src/img')

  return config
}
