module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget('html')
  eleventyConfig.addWatchTarget('scss')
  eleventyConfig.addWatchTarget('ts')

  return {
    dir: {
      data: 'data',
      includes: 'includes',
      input: 'docs',
      layouts: 'html/layouts',
      output: 'dist',
    },
  }
}
