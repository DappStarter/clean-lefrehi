require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame sword strategy crawl oil erosion half end army general'; 
let testAccounts = [
"0xe109c032d6623a040ad114b809ba4b05cd4250a09645c1a2c9abcbb4ddc19c54",
"0x872f025b5a59bb7117d5ecaadb1d0f17387f9365ab8daaef3d0719198bc5afe5",
"0x046311eca224d4e8514ee93d39a93722bb0da74cb32ca19195ccf2e9aea4c581",
"0x62ba660fa40742921781a951e01928cce772c5a456b2ad0ea1cd7dae8caf00e0",
"0x064c1d7271a92a356a8e9cbef0694b7e895592ade0f37c951ac2938601fa1eb2",
"0x463e244ef25517ce2f9ec8724a70d095ee8ce856d8f457e5a9560b75231ecc67",
"0x1da6d381e01b5edd8b8a414cbeabaf32609aa8f264dde597a59cd3ae61625c8e",
"0x7a322a3814e5f9532693508f7ce2cb55bdf3faac9f576c714fd5771159fea893",
"0x36720aeed0deba19c124b70c5240944449aba27ac3dbb8c3da7cabb64106205c",
"0xda4be4f7aa2748903ac1e1cf43a378d764b78129c98fe9799f5a4c1f31c59d95"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
