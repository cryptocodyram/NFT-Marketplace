const Wnft = artifacts.require("Wnft");

module.exports = function (deployer) {
  deployer.deploy(Wnft);
};
