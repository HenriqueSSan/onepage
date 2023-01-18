module.exports = {
  syntax: 'postcss-scss',
  map: 'absolute',
  plugins: [
    require('autoprefixer'),
    require('postcss-import'),
    require('postcss-combine-media-query'),
    require('postcss-sort-media-queries'),
    require('postcss-combine-duplicated-selectors'),
  ],
};
