const OwlToken = artifacts.require("OwlToken");
const OwlBar = artifacts.require("OwlBar");
const MasterChef = artifacts.require("MasterChef");
const Multicall = artifacts.require("Multicall");
const PancakeProfile = artifacts.require("PancakeProfile");
const OwlVault = artifacts.require("OwlVault");

module.exports = function(deployer) {
    deployer.then(async () => {
        // await deployer.deploy(Multicall);
        // await deployer.deploy(OwlToken);
        // await deployer.deploy(OwlBar, '0xfa3fde315450e2799e8d3bd1024567de3a4449e3');
            // await deployer.deploy(MasterChef, '0xfa3fde315450e2799e8d3bd1024567de3a4449e3', '0x0764bf5c4ee8ba4a89e0bc8bd7e5395eb30fcd2a', '0xF68Bd373B756FD0dDa800020C1BEEC238d7BB96F','40000000000000000000','703820');
        // await deployer.deploy(PancakeProfile, '0xfa3fde315450e2799e8d3bd1024567de3a4449e3', '3000000000000000000', '1000000000000000000','1000000000000000');
        // await deployer.deploy(OwlVault, '0xfa3fde315450e2799e8d3bd1024567de3a4449e3', '0x0764bf5c4ee8ba4a89e0bc8bd7e5395eb30fcd2a', '0x95f37e85f1da311d32fb0f22d362f28d65add6e9','0xF68Bd373B756FD0dDa800020C1BEEC238d7BB96F','0xF68Bd373B756FD0dDa800020C1BEEC238d7BB96F');
    });
};
