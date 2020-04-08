

export default (options) => {
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
          preact: "*"
        },
        devDependencies: {
            "babel-jest": "^25.1.0",
            "enzyme": "^3.10.0",
            "enzyme-adapter-preact-pure": "^2.0.0",
            "identity-obj-proxy": "^3.0.0",
            "jest": "^25.1.0",
            "jest-environment-jsdom-sixteen": "^1.0.3",
            "rollup-configured": "^0.0.10"
        },
    };

    return {
        file: 'package.json',
        content: JSON.stringify(pkg, null, '\t')
    }
};