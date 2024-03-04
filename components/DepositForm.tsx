"use client";
import React, { useState } from "react";
import { Layout, Row, Col, Button, Spin } from "antd";
import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { useWalletKit } from "@mysten/wallet-kit";
import { AbiSendTx } from "../app/abi/SendTx";
import Web3 from "web3";
import {
  useWallet,
  InputTransactionData,
} from "@aptos-labs/wallet-adapter-react";

import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

const aptosConfig = new AptosConfig({ network: Network.DEVNET });
const aptos = new Aptos(aptosConfig);

declare global {
  interface Window {
    ethereum: any;
  }
}
const DepositForm = () => {
  const { account, signAndSubmitTransaction } = useWallet();
  const [accountHasList, setAccountHasList] = useState<boolean>(false);
  const [transactionInProgress, setTransactionInProgress] =useState<boolean>(false);
  // const [txHash, setTxHash] = useState("");
  // const { signAndExecuteTransactionBlock } = useWalletKit();
  const [amount, setAmount] = useState("");
  const [setAccount] = useState(null);
  let accounts;
  let txHash: string = "";
  let userAddress;

  const depositAptVault = async(event: any) =>{
    if (!account) return [];

    setTransactionInProgress(true);
    const moduleAddress = "0xe8ec9945a78a48452def46207e65a0a4ed6acd400306b977020924ae3652ab85"
    const transaction:InputTransactionData = {
      data: {
        function:`${moduleAddress}::allocate_funding_v4::buy_asset`,
        functionArguments:['XLM', 'Stellar sector', 'Aptos', '0x8a6058ad56fb07015ac9db9221c14e56ce9db6655ff94edd6439ac6bf565b856']
      }
    }
    try {
      // sign and submit transaction to chain
      const response = await signAndSubmitTransaction(transaction);
      // wait for transaction
      await aptos.waitForTransaction({transactionHash:response.hash});
      setAccountHasList(true);
      txHash = response.hash
    } catch (error: any) {
      setAccountHasList(false);
    }finally{
      alert(`Transaction successfully: ${txHash}`)
      setTransactionInProgress(false);
    }
  }

  const setContract = async () => {
    accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    userAddress = accounts[0];
    const web3 = new Web3(window.ethereum);

    const contract = new web3.eth.Contract(
      AbiSendTx,
      "0xbe4359108dd1a21AA0784E3ad7C8a2C53402713f"
    );

    const value = 1;
    const gas = await (contract.methods.setData as any)(value).estimateGas();

    const gasPrice = await web3.eth.getGasPrice();
    const nonce = await web3.eth.getTransactionCount(userAddress);

    const tx = {
      from: userAddress,
      to: process.env.CONTRACT_ADDRESS,
      gasPrice: gasPrice,
      gas: gas,
      nonce: nonce,
      data: (contract.methods.setData as any)(value).encodeABI(),
    };

    const privateKey = 'pqd'
    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

    const receipt = await web3.eth.sendSignedTransaction(
      signedTx.rawTransaction
    );
    if (receipt.status === "0x1") {
      // the transaction was successful
      alert("Success Deposit")
    } else {
      // the transaction failed
    }
  };

  // useEffect(() => {
  //   console.log(getFullnodeUrl("devnet"));
  // }, []);

  return (
    <>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Amount
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          id="amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <div className="text-right">
          <Spin spinning={transactionInProgress}>
            {!txHash && (
              <Row gutter={[0, 32]} style={{ marginTop: "2rem" }}>
                <Col span={8} offset={8}>
                  <Button
                    onClick={depositAptVault}
                    block
                    type="primary"
                    style={{ height: "40px", backgroundColor: "#3f67ff" }}
                  >
                    Deposit
                  </Button>
                </Col>
              </Row>
            )}
          </Spin>
          {/* <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            onClick={depositAptVault}
          >
            Deposit
          </button> */}
        </div>
      {/* </form> */}
    </>
  );
};

export default DepositForm;
