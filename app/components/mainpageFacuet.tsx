"use client";

import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Link from "next/link";
import { fetchTimerState, saveTimerState } from "../lib/action";
import { FaucetWithdrawlTokens, approvePhazeTokenTransfer, contractFucetToken } from "../lib/web3";
import prophazefaucetabi from "../lib/prophazefaucet.json";

export default function Home() {

  const handleDeposit = async (e: any) => {
    e.preventDefault();

    try {
      const userChecked = e.target.userAddress.checked;
      const contractChecked = e.target.contractAddress.checked;

      if (userChecked) {
        console.log("User checkbox checked");
        const gg = await approvePhazeTokenTransfer(
          e.target.depositAmount.value,
          undefined
        );
      }

      if (contractChecked) {
        console.log("Contract checkbox checked");
        const gg = await approvePhazeTokenTransfer(
          e.target.depositAmount.value,
          contractFucetToken
        );
      }

      return "no options";
    } catch (error) {
      console.log(error);
    }
  };

  const handleWithdraw = async () => {
    try {
      console.log("handle withdrawl");

      // const provider = new ethers.providers.Web3Provider(window.ethereum);

      // // Get the signer
      // const signer = provider.getSigner();
  
      // // Contract main
      // const contractInstance = new ethers.Contract(
      //   contractFucetToken,
      //   prophazefaucetabi,
      //   signer
      // );

      const gg = await FaucetWithdrawlTokens()

      console.log(gg)


    } catch (error) {
      console.log("error");
    }
  }; 

  return (
    <main className="flex min-h-screen flex-col items-center p-4">

      <article className="p-4">
        <header className="flex items-start gap-2 flex-col bg-[#444] p-4 rounded-lg">
          <h2 className="text-2xl font-bold uppercase">
            Need some extra tokens
          </h2>
          <p className="text-sm">
            There are plenty of them around here, popular and common, get them
            before they run out and join the community to refuel.
          </p>
          <Link
            href="/list"
            className="bg-[#222] p-4 rounded-lg font-bold w-full text-center"
          >
            View more
          </Link>
        </header>

        <div className="bg-[#222] mt-4 rounded-lg drop-shadow-lg ">
          {/* Fucet timer */}

          <div className="p-10 text-center flex items-center flex-col gap-4">
            <h2 className="text-2xl font-bold">ProPhaze Token Faucet</h2>

            <button
              onClick={handleWithdraw}
              className="bg-[#111] p-2 rounded-lg font-bold"
            >
              Withdraw Tokens
            </button>
          </div>
        </div>
      </article>

      <div className="flex items-center flex-col p-4 bg-[#333] rounded-lg">
        <h2 className="mb-4 font-bold uppercase">
          approve prophaze token handler
        </h2>
        <form onSubmit={handleDeposit}>
          <div className="flex items-center mb-4">
            <label className="mr-2">
              <input
                type="checkbox"
                name="userAddress"
                className="mr-1"
                id="userAddress"
                value="user"
              />
              Use User
            </label>
            <label>
              <input
                type="checkbox"
                name="contractAddress"
                className="mr-1"
                id="contractAddress"
                value="contract"
              />
              Use Address
            </label>
          </div>

          <input
            type="amount"
            placeholder="enter amount"
            className="p-2 text-black rounded-lg"
            id="depositAmount"
            name="depositAmount"
          />
          <button className="p-2 bg-[#222] rounded-lg ml-2 hover:bg-[#444]">
            approve
          </button>
        </form>
      </div>
      
    </main>
  );
}
