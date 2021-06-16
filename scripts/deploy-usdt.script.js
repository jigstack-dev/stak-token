const { ethers, upgrades } = require('hardhat');

const main = async () => {
  // Config for platform
  // const param = process.env.PARAMETER;
  // Get contract factory
  const Usdt = await ethers.getContractFactory('USDTest');
  // Deploy contract proxy
  // const ProxyContractFactory = await upgrades.deployProxy(ContractFactory, [param]);
  console.log('Deploying contract');
  // Wait for Contract factory deploy success
  const deployed = await Usdt.deploy();
  // Log the address
  console.log('Usdt deployed at', deployed.address);
};

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });