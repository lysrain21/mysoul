require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",

  networks: {
    //部署mumbai测试网络
    //npm install dotenv --save，以启用.env文件
  // },
  base: {
    url: process.env.SEPOLIA_RPC, //请在.env中添加您的Base链RPC URL
    accounts: [process.env.PRIVATE_KEY], //确保使用正确的私钥
    // 根据Base链要求可以添加更多网络配置，例如chainId等
    chainId: 11155111, // 例如：Base主网的chainId，请根据实际情况调整
  }
  },
  // npx hardhat run scripts/deployNFTCollection.js --network base
};
