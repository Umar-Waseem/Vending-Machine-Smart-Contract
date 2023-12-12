var MyContract = artifacts.require("VendingMachine");

module.exports = function (deployer) {
    // deployment steps
    deployer.deploy(MyContract);
};