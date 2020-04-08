 const deps = require('../../deps');

module.exports = (options) => {
    let pkg = {
        name: options.packageName,
        version: "0.0.1",
        description: '',
        private: true,
        "scripts": {
            "start": "rollup -c -w --environment preset:dev",
            "build": "rollup -c --environment preset:build_app",
            "test": "jest --config config/jest.js",
            "test:watch": "jest --config config/jest.js --watch"
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