var CommonsChunkPlugin = require("/usr/local/lib/node_modules/webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
    entry: {
        dashboard: "./dashboard/app/entry.js",
        accounts: "./accounts/app/entry.js"
    },
    output: {
        filename: "./dist/[name].entry.chunk.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    // THIS IS COOL!
    // If your entry chunks have some modules in common, 
    // there is a cool plugin for this. The CommonsChunkPlugin 
    // identifies common modules and put them into a commons 
    // chunk. You need to add two script tags to your page, one 
    // for the commons chunk and one for the entry chunk.
    plugins: [
        new CommonsChunkPlugin("./dist/commons.chunk.js")
    ]
};