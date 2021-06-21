window.onload = () => {
    const web3 = new Web3('http://localhost:8545');
    const addr = '0xc9F26f69e0771E697aAbE4E8Be5F097aDf76D783';

    const contract = getContract(web3, addr);
    contract.methods.getInteger().call().then((result) => {
        document.getElementById('label').innerHTML = result;
    }).catch((err) => {
        console.error(err);
    });
};

getContract = (web3, address) => {
    const abi = JSON.parse('[{ "inputs": [], "name": "getInteger", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "pure", "type": "function" }]');
    return new web3.eth.Contract(abi, address);
};