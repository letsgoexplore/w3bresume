import React, { useState } from "react";
import { Button, Flex } from "@chakra-ui/react";
import Web3 from "web3";


const WalletButton = ({account, setAccount, loggedIn, setLoggedIn, buttonStates, setButtonStates}) => {

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        await window.ethereum.enable();

        // We don't know window.web3 version, so we use our own instance of Web3
        // with the injected provider given by MetaMask
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
        const web3 = new Web3(window.ethereum);

        const accounts = await web3.eth.getAccounts();
        console.log('Account connected: ', accounts[0]);
        setAccount(accounts[0]);
        updateState(accounts[0])
      } catch (error) {
        console.error("User denied account access");
      }
    } else {
      console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }
  };

  const truncateAddress = (address) => {
    const length = 12;
    const truncated = address.slice(0, length) + "...";
    return truncated;
  };
  
  const updateState = (account)  => {
    if(account) {
      setLoggedIn(true);
      setButtonStates([1, 0, 1, 0]);
    }
  }
  
  return (
    <Flex justifyContent="flex-end" alignItems="center">
      <Button colorScheme='custom' bg='#FB6454' color={"white"} variant="solid" onClick={connectWallet}>
        {account ? truncateAddress(account) : "Connect Wallet"}
      </Button>
    </Flex>
  );
};

export default WalletButton;
