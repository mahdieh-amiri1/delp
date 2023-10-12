require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("@nomicfoundation/hardhat-ethers")
require("dotenv").config()
require("hardhat-gas-reporter")
require("solidity-coverage")
// require("@nomiclabs/hardhat-etherscan")
// require("@nomiclabs/hardhat-waffle")

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC_URL = 
    process.env.SEPOLIA_RPC_URL
    ||
    "https://eth.getblock.io/5f884767-a8f9-4be0-a074-209b11e0215b/sepolia/"

    const PRIVATE_KEY =
    process.env.PRIVATE_KEY ||
    "0x11ee3108a03081fe260ecdc106554d09d9d1209bcafd46942b10e02943effc4a"
    
    const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""
    const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""

module.exports = {
  networks: {
    hardhat: {
      chainId: 31337,
      // gasPrice: 130000000000,
    },

    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
      blockConfirmations: 6,
    },

    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
      // blockConfirmations: 1,
    },
  },

  solidity: "0.8.20",

  namedAccounts: {
    deployer: {
      default: 0 // first account is default choice to become deployer
    },

    etherscan: {
      apiKey: ETHERSCAN_API_KEY,
      // customChains: [], // uncomment this line if you are getting a TypeError: customChains is not iterable
    },

    gasReporter: {
      enabled: true,
      currency: "USD",
      outputFile: "gas-report.txt",
      noColors: true,
      coinmarketcap: COINMARKETCAP_API_KEY,
      // token: "MATIC",
    }

  }
};
