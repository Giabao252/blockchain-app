require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/p3ZR_CRxyThRLfjrKz9qiJSo7rVLtk65',
      accounts: ['cd4a1343a436a529277c23d5d60578853a4beb633fd3aa41eaf6a15b6cde1ade']
    }
  }
}