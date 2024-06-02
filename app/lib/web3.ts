import { ethers } from "ethers";
import prophazetokenabi from "./prophazetokenabi.json";
import prophazefaucetabi from "./prophazefaucet.json";

export const contractTokenContract =
  "0xcDA88690FD24AE5dde443EBeE95b8ee2EB5d5Dc9";

export const contractFucetToken = "0x11e3229a195c0d01ED91614b50E0A89ddC7A7a66";

export const getEthereumObject = () => {
  return typeof window !== "undefined" ? window.ethereum : null;
};

export const getEthereumAccount = async () => {
  try {
    const ethereum: Window = getEthereumObject();

    if (!ethereum) {
      console.error("Make sure you have Metamask!");
      return null;
    }

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      return account;
    } else {
      alert("connect your metamask account....");

      // Setup another alert
      console.error("No authorized account found");
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Approve token transfer
export const approvePhazeTokenTransfer = async (
  _amount: any,
  faucetContract: any
) => {
  try {
    console.log("What is life");

    const amountInWei = ethers.utils.parseEther(_amount.toString());
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Get the signer
    const signer = provider.getSigner();
    const user = await signer.getAddress();

    // Contract main
    const contractInstance = new ethers.Contract(
      contractTokenContract,
      prophazetokenabi,
      signer
    );

    // console.log("normal amount", _amount);
    // console.log("amount in wei", amountInWei.toString());

    if (faucetContract === undefined) {
      const approvingFaucet = await contractInstance.approve(user, amountInWei);

      console.log("transaction starting", approvingFaucet.hash);

      await approvingFaucet.wait();

      console.log("transaction over", approvingFaucet.hash);

      return approvingFaucet.hash();
    }

    const gg = await contractInstance.approve(faucetContract, amountInWei);

    console.log("transaction starting", gg.hash);

    await gg.wait();

    console.log("transaction over", gg.hash);

    return gg.hash();
  } catch (error) {
    console.log(error);
  }
};

// Fauct withdrawl
export const getBalanceOfContract = async () => {
  try {
    console.log("Getting balance");

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Get the signer
    const signer = provider.getSigner();

    // Contract main
    const contractInstance = new ethers.Contract(
      contractFucetToken,
      prophazefaucetabi,
      signer
    );

    const gg = await contractInstance.getBalance();

    console.log(gg);
  } catch (error) {
    console.log(error);
  }
};

export const FaucetWithdrawlTokens = async () => {
  try {
    console.log("withdrawl");

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const gasPrice = await provider.getGasPrice();

    // Get the signer
    const signer = provider.getSigner();

    // Contract main
    const contractInstance = new ethers.Contract(
      contractFucetToken,
      prophazefaucetabi,
      signer
    );

    const reToken = await contractInstance.requestTokens({
      gasLimit: 200000, // Adjust this value based on your contract's gas consumption
      gasPrice: gasPrice,
    });

    console.log("intizilzing", reToken.hash);

    await reToken.wait();

    console.log("completed", reToken.hash);
  } catch (error) {
    console.log(error);
  }
};

// export const mintNFT = async (_amount: any) => {
//   try {
//     console.log("minting nft", _amount);

//     const amountInWei = ethers.utils.parseEther((0.042 * _amount).toString());

//     console.log("amountInWei", amountInWei);

//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     // Get the signer
//     const signer = provider.getSigner();

//     // Contract main
//     const contractInstance = new ethers.Contract(
//       ContractNFTCollection,
//       erc721TokenAbi,
//       signer
//     );

//     await contractInstance.mint(_amount, {
//       value: amountInWei,
//       gasLimit: 300000,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const grabContractData = async () => {
//   try {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     // Get the signer
//     const signer = provider.getSigner();
//     const user = signer.getAddress();

//     // Contract main
//     const contractInstance = new ethers.Contract(
//       ContractNFTCollection,
//       erc721TokenAbi,
//       signer
//     );

//     const gg = await contractInstance.ownerToToken(user);

//     return gg;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const userOwns = async () => {
//   try {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     // Get the signer
//     const signer = provider.getSigner();
//     const user = signer.getAddress();

//     // Contract main
//     const contractInstance = new ethers.Contract(
//       ContractNFTCollection,
//       erc721TokenAbi,
//       signer
//     );

//     const gg = await contractInstance.ownerToToken(user);

//     return gg;
//   } catch (error) {
//     console.log(error);
//   }
// };
