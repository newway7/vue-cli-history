module.exports = {
    
    filenameHashing: false,
    /* 代码保存时进行eslint检测 */

    devServer: {
        
        host: '0.0.0.0',
        port: 8000,
        https: false,
        hot: true,
        open:true,
        overlay:{
            errors:true,
        }
        
    },
    // outputDir:'aaa',
    // publicPath:'/aaa',

}