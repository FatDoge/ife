const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
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
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin()]
};