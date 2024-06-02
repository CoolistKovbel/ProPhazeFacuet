import { ethers } from "ethers";
import prophazetokenabi from "./prophazetokenabi.json";

const contractTokenContract = "0xcDA88690FD24AE5dde443EBeE95b8ee2EB5d5Dc9";
const contractFucetToken = "0xb59F663216697B8DB686B49346c249500f26ea87";

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
