
const {scaffold} =  require("./scaffold/scaffold");
const {version} = require('../package');

module.exports = async function (rawArgs) {
    return await scaffold();
};
