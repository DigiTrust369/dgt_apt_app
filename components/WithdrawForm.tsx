"use client";
import React, { useState } from "react";
import { Layout, Row, Col, Button, Spin } from "antd";
import { TransactionBlock } from "@mysten/sui.js/transactions";
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

const WithdrawForm = () => {
  const { account, signAndSubmitTransaction } = useWallet();
  const [accountHasList, setAccountHasList] = useState<boolean>(false);
  const [transactionInProgress, setTransactionInProgress] =useState<boolean>(false);
  
  const [amount, setAmount] = useState("");
  let txHash: string = "";

  const withdrawApt = async (event: any) =>{
    if (!account) return [];

    setTransactionInProgress(true);
    const moduleAddress = "0xe8ec9945a78a48452def46207e65a0a4ed6acd400306b977020924ae3652ab85"
    const transaction:InputTransactionData = {
      data: {
        function:`${moduleAddress}::allocate_funding_v4::mint`,
        functionArguments:['0xe8ec9945a78a48452def46207e65a0a4ed6acd400306b977020924ae3652ab85', amount]
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
      if(!txHash){
        alert(`Transaction failed`)
      }
      alert(`Transaction successfully: ${txHash}`)
      setTransactionInProgress(false);
    }
  }

  return (
    <>
      {/*<form onSubmit={handleSubmit}>*/}
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
                    onClick={withdrawApt}
                    block
                    type="primary"
                    style={{ height: "40px", backgroundColor: "#3f67ff" }}
                  >
                    Withdraw
                  </Button>
                </Col>
              </Row>
            )}
          </Spin>
          {/* <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            onClick={withdrawApt}
          >
            Withdraw
          </button> */}
        </div>
      {/*</form>*/}
    </>
  );
};

export default WithdrawForm;
