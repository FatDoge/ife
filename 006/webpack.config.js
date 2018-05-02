const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/[name]-[hash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: { //我写一个module
        //配置一个rules(规则),rules是一个数组,里面包含一条一条的规则
        rules: [
            {
                // test 表示测试什么文件类型
                test: /\.css$/,
                // 使用 'style-loader','css-loader'
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.san$/,
                include: /src/,
                use: [
                    { loader: 'san-loader' }
                ]
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                    options: { minimize: true }
                }
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.ejs",
        filename: "./index.html",
        title:'san'
    }),]
};