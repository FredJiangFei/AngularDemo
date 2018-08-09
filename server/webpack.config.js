module.exports = {
    entry: {
        app: './node.server.ts'
    },
    output: {
        path: __dirname + "/build",
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    }
}