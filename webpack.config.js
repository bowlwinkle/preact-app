const path = require("path");

module.exports = {
    //input; webpack will load index.js by default
    entry: "./src",

    //output
    output: {
        path: path.join(__dirname + "/build"),
        filename: "bundle.js"
    },

    //transformations; configure babel
    module: {
        rules: [
            {
                test: /\.jsx?/i,
                loader: "babel-loader",
                options: {
                    presets: [["env", {production: {}}]],
                    plugins: [
                        ["transform-react-jsx", {pragma: "h"}]
                    ]
                }
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.png|.jpeg/i,
                loader: "file-loader?name=../server/static/assets/[name].[ext]",
                query: {
                    useRelativePath: process.env.NODE_ENV === "production"
                }
            },
        ]
    },

    //sourcemaps
    devtool: "source-map",

    devServer: {
        contentBase: path.join(__dirname, "src"),
        compress: true, //GZIP compression
        historyApiFallback: true
    }

    //server configuration
};