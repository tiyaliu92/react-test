const path = require("path");
module.exports = {
    entry:[
        path.join(__dirname,'src/index.js'),
        'react-hot-loader/patch'
    ],
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    devServer:{
        port:8080,
        contentBase:path.join(__dirname,'./dist'),//URL的根目录。如果不设定的话，默认指向项目根目录。
        historyApiFallback:true,
        host:'0.0.0.0'
    },
    module:{
        rules:[{
            test:/\.js$/,
            use:['babel-loader?cacheDirectory=true'],
            include:path.join(__dirname,'src')
        }]
    }
};