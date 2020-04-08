const scaffold = require("./scaffold/scaffold");
const {version} = require('../package');


module.exports = async function (rawArgs) {
    console.log('scaffold version: ', version);
    return await scaffold();
};
