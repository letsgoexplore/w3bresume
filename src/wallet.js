import React, { useState } from "react";
import { Button, Flex } from "@chakra-ui/react";
import Web3 from "web3";

const WalletButton = () => {
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        await window.ethereum.enable();

        // We don't know window.web3 version, so we use our own instance of Web3
        // with the injected provider given by MetaMask
        const web3 = new Web3(window.ethereum);

        const accounts = await web3.eth.getAccounts();
        console.log('Account connected: ', accounts[0]);
        setAccount(accounts[0]);
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

  return (
    <Flex justifyContent="flex-end" alignItems="center">
      <Button colorScheme='blue' color={"white"} variant="solid" onClick={connectWallet}>
        {account ? truncateAddress(account) : "Connect Wallet"}
      </Button>
    </Flex>
  );
};

export default WalletButton;
