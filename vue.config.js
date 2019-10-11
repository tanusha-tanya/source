module.exports = {
  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
  }
}
module.exports = {
    pluginOptions: {
        svgSprite: {
            /*
             * The directory containing your SVG files.
             */
            dir: 'src/assets/svg',
            /*
             * The reqex that will be used for the Webpack rule.
             */
            test: /\.(svg)(\?.*)?$/,
            /*
             * @see https://github.com/kisenka/svg-sprite-loader#configuration
             */
            loaderOptions: {
                extract: true,
                spriteFilename: 'img/svg.[hash:8].svg' // or 'img/svg.svg' if filenameHashing == false
            },
            /*
             * @see https://github.com/kisenka/svg-sprite-loader#configuration
             */
            pluginOptions: {
                plainSprite: true
            }    
        }    
    }    
};