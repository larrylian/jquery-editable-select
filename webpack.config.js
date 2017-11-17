/**
 * Created by larrylian 2017.11.17
 */
const path=require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');   //css分离插件，需要安装
const cleanWebpackPlugin = require("clean-webpack-plugin");
module.exports={
    entry:{
        "jquery-editable-select":'./src/jquery-editable-select.js',
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].min.js',
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:extractTextPlugin.extract({
                    fallback:'style-loader',
                    use:[
                        {loader:'css-loader',options:{importLoaders:1}},
                    ]
                })
            },
            {
                test:/\.(png|jpg|gif)/,
                use:[{
                    loader:"url-loader",
                    options:{
                        limit:100000000000000,
                        outputPath:'dist/'
                    }
                }]
            }
        ]
    },
    plugins:[
        new extractTextPlugin("jquery-editable-select.min.css"),
        new cleanWebpackPlugin(['dist'])
    ]
};
