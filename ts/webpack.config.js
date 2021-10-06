const path = require("path")

// webpack中的所有配置信息，都写在exports里，导出
module.exports = {
    resolve: {
        extensions: ['.ts']
    },

    // 入口文件
    entry: './src/index.ts',

    // 打包文件所在目录
    output: {
        path: path.resolve(__dirname, 'dist'),

        // 打包后的文件
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                //指定规则生效的文件
                test: /\.ts$/,

                //指定loader
                use: 'ts-loader',

                exclude: /node-modules/
            }
        ]
    }
};