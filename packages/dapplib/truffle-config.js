require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name release stick pupil install open fringe spike'; 
let testAccounts = [
"0x21129d429414bc3d6aa04beb6967a1535b49a98d8c3edb0674e3e5d5717c9dfa",
"0xd5c5c175334f7a3949ae2724bcf22e0a0b8e4107f64fb638ae38113b5cb42d94",
"0x03ccebdf3680b903a6a35540ad33c04473e8075f48aa15e44e4c3d9da0316f51",
"0x2b5030d63833ab8bd06014f4658aa1096321379aa774ef7c34a78ee7e8b28d61",
"0x88ab18017661d5af2d1a2280866e6198e1043e3ab14bb282333200763bf771b7",
"0xa762838c160fb8ad267a2c3f7048b50108e912e257b3b64673b9a2cff8c3fd8b",
"0x229292c6bc2672474eb3843d837be828facee57980243aa8d9c79c963036260c",
"0xdf58ca8dc1de263c91b231d01e9d04cf27dd8f22cd24bd222e06a981561e648d",
"0x88b2f65942ed378014a3cfd5725948e37560052fa2d789481f749493df8fea91",
"0xbb1f65ab3837f94d22cd5662c53d5f8bd70c335ed461dce1fdbc07770ee10fab"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
