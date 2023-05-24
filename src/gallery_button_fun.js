import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

// 你的合约的ABI


const GalleryButton = async (blockNum, buttonStates, setButtonStates) => {
  
    const contractABI = [
      {
       "inputs": [],
       "stateMutability": "nonpayable",
       "type": "constructor"
      },
      {
       "anonymous": false,
       "inputs": [
        {
         "indexed": true,
         "internalType": "address",
         "name": "owner",
         "type": "address"
        },
        {
         "indexed": true,
         "internalType": "address",
         "name": "approved",
         "type": "address"
        },
        {
         "indexed": true,
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
        }
       ],
       "name": "Approval",
       "type": "event"
      },
      {
       "anonymous": false,
       "inputs": [
        {
         "indexed": true,
         "internalType": "address",
         "name": "owner",
         "type": "address"
        },
        {
         "indexed": true,
         "internalType": "address",
         "name": "operator",
         "type": "address"
        },
        {
         "indexed": false,
         "internalType": "bool",
         "name": "approved",
         "type": "bool"
        }
       ],
       "name": "ApprovalForAll",
       "type": "event"
      },
      {
       "inputs": [
        {
         "internalType": "address",
         "name": "to",
         "type": "address"
        },
        {
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
        }
       ],
       "name": "approve",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
      },
      {
       "inputs": [
        {
         "internalType": "address",
         "name": "to",
         "type": "address"
        }
       ],
       "name": "mint",
       "outputs": [
        {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
        }
       ],
       "stateMutability": "nonpayable",
       "type": "function"
      },
      {
       "anonymous": false,
       "inputs": [
        {
         "indexed": true,
         "internalType": "address",
         "name": "previousOwner",
         "type": "address"
        },
        {
         "indexed": true,
         "internalType": "address",
         "name": "newOwner",
         "type": "address"
        }
       ],
       "name": "OwnershipTransferred",
       "type": "event"
      },
      {
       "inputs": [],
       "name": "renounceOwnership",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
      },
      {
       "inputs": [
        {
         "internalType": "address",
         "name": "from",
         "type": "address"
        },
        {
         "internalType": "address",
         "name": "to",
         "type": "address"
        },
        {
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
        }
       ],
       "name": "safeTransferFrom",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
      },
      {
       "inputs": [
        {
         "internalType": "address",
         "name": "from",
         "type": "address"
        },
        {
         "internalType": "address",
         "name": "to",
         "type": "address"
        },
        {
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
        },
        {
         "internalType": "bytes",
         "name": "_data",
         "type": "bytes"
        }
       ],
       "name": "safeTransferFrom",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
      },
      {
       "inputs": [
        {
         "internalType": "address",
         "name": "operator",
         "type": "address"
        },
        {
         "internalType": "bool",
         "name": "approved",
         "type": "bool"
        }
       ],
       "name": "setApprovalForAll",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
      },
      {
       "anonymous": false,
       "inputs": [
        {
         "indexed": true,
         "internalType": "address",
         "name": "from",
         "type": "address"
        },
        {
         "indexed": true,
         "internalType": "address",
         "name": "to",
         "type": "address"
        },
        {
         "indexed": true,
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
        }
       ],
       "name": "Transfer",
       "type": "event"
      },
      {
       "inputs": [
        {
         "internalType": "address",
         "name": "from",
         "type": "address"
        },
        {
         "internalType": "address",
         "name": "to",
         "type": "address"
        },
        {
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
        }
       ],
       "name": "transferFrom",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
      },
      {
       "inputs": [
        {
         "internalType": "address",
         "name": "newOwner",
         "type": "address"
        }
       ],
       "name": "transferOwnership",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
      },
      {
       "inputs": [
        {
         "internalType": "address",
         "name": "owner",
         "type": "address"
        }
       ],
       "name": "balanceOf",
       "outputs": [
        {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
        }
       ],
       "stateMutability": "view",
       "type": "function"
      },
      {
       "inputs": [
        {
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
        }
       ],
       "name": "getApproved",
       "outputs": [
        {
         "internalType": "address",
         "name": "",
         "type": "address"
        }
       ],
       "stateMutability": "view",
       "type": "function"
      },
      {
       "inputs": [],
       "name": "getTokenCounter",
       "outputs": [
        {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
        }
       ],
       "stateMutability": "view",
       "type": "function"
      },
      {
       "inputs": [
        {
         "internalType": "address",
         "name": "owner",
         "type": "address"
        },
        {
         "internalType": "address",
         "name": "operator",
         "type": "address"
        }
       ],
       "name": "isApprovedForAll",
       "outputs": [
        {
         "internalType": "bool",
         "name": "",
         "type": "bool"
        }
       ],
       "stateMutability": "view",
       "type": "function"
      },
      {
       "inputs": [],
       "name": "name",
       "outputs": [
        {
         "internalType": "string",
         "name": "",
         "type": "string"
        }
       ],
       "stateMutability": "view",
       "type": "function"
      },
      {
       "inputs": [],
       "name": "owner",
       "outputs": [
        {
         "internalType": "address",
         "name": "",
         "type": "address"
        }
       ],
       "stateMutability": "view",
       "type": "function"
      },
      {
       "inputs": [
        {
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
        }
       ],
       "name": "ownerOf",
       "outputs": [
        {
         "internalType": "address",
         "name": "",
         "type": "address"
        }
       ],
       "stateMutability": "view",
       "type": "function"
      },
      {
       "inputs": [
        {
         "internalType": "bytes4",
         "name": "interfaceId",
         "type": "bytes4"
        }
       ],
       "name": "supportsInterface",
       "outputs": [
        {
         "internalType": "bool",
         "name": "",
         "type": "bool"
        }
       ],
       "stateMutability": "view",
       "type": "function"
      },
      {
       "inputs": [],
       "name": "symbol",
       "outputs": [
        {
         "internalType": "string",
         "name": "",
         "type": "string"
        }
       ],
       "stateMutability": "view",
       "type": "function"
      },
      {
       "inputs": [
        {
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
        }
       ],
       "name": "tokenURI",
       "outputs": [
        {
         "internalType": "string",
         "name": "",
         "type": "string"
        }
       ],
       "stateMutability": "view",
       "type": "function"
      }
     ];
    const contractAddress = "0x5Ae1ECCc15312128cDd2dEEe2628a2c72751C531";
    
    // switch to the Goerli
    if (window.ethereum.chainId !== '0x5') {
      try {
          // Request user to switch to Goerli testnet
          await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0x5' }], 
          });
      } catch (switchError) {
        // This error code means the user needs to add the Goerli network to MetaMask
        if (switchError.code === 4902) {
            try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [{
                        chainId: '0x5',
                        rpcUrl: 'https://goerli.infura.io/v3/b573ced19e26400e8dca7b928505f329',
                        //... any other params you need to set
                    }],
                });
            } catch (addError) {
                // handle "add" error
            }
        }
        // handle other "switch" errors
      }
    }
    const web3Instance = new Web3(window.ethereum);
    const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);

    if (!web3Instance || !contractInstance) return;

    const accounts = await web3Instance.eth.getAccounts();
    if (accounts.length === 0) {
      alert('Please connect to MetaMask!');
      return;
    }

    // send transaction
    try{
      await contractInstance.methods.mint(accounts[0]).send({ from: accounts[0] });
      var newbuttonStates = buttonStates;
      newbuttonStates[blockNum] = 1;
      setButtonStates(newbuttonStates);
    } catch (error) {
      // 捕捉到异常错误    
      // 判断异常错误是否为用户取消交易的错误
      if (error.code === 4001) {
        console.log("transaction delete!")        
      } else {
        console.error(error);
      }
    }
  
};
export default GalleryButton;