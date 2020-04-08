const deps = require('../../deps');


module.exports = (options) => {
    let pkg = {
        name: options.packageName,
        version: "0.0.1",
        description: '',
        "main": "lib/index.js",
        "license": "MIT",
        "publishConfig": {
            "access": "public"
        },
        "files": [
            "src",
            "lib"
        ],
        "keywords": [
        ],
        "scripts": {
            "start": "rollup -c -w --environment project:demo,preset:dev",
            "build:demo": "rollup -c --environment project:demo,preset:build_app",
            "build": "rollup -c --environment project:lib",
            "test": "jest --config config/jest.js",
            "test:watch": "jest --config config/jest.js --watch"
        },
        rollupConfig:{
           project:{
               "demo": {
                   "input": "demo/src/index.js",
                   "html": "demo/src/index.html",
                   "output": "demo/build",
               }
           }
        },
        dependencies:{
            ...deps.frameworks
        },
        devDependencies: {
            ...deps.buildTools,
            ...deps.testing
        },
    };

    return {
        file: 'package.json',
        content: JSON.stringify(pkg, null, '\t')
    }
};