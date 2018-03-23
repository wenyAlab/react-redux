var path  = require('path');
var webpack = require('webpack');

module.exports = {
    entry:{
        entry:'./index.js'
    },
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist')
    },
    devServer:{
        contentBase:'./',
        inline:true,
        port:7000
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                options:{
                    presets:['es2015','react']
                }
            }
        ]
    }
}