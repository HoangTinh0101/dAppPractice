//import etherjs
//import { ethers } from "https://cdn.ethers.io/lib/ethers-5.2.esm.min.js";

//import contract Address n ABI
const FCContractAddress = "0x1365B322cFFEC77AC71aE403c9814743DEb86e01";
const FCContractABI = [
  {
    inputs: [],
    name: "getClub",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_club",
        type: "string",
      },
    ],
    name: "setClub",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
let FCContract;
let signer;

// Connect MetaMask
//import { ethers } from "ethers";
//const { ethers } = require("ethers");

//const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");
const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");

provider.send("eth_requestAccounts", []).then(() => {
  provider.listAccounts().then((accounts) => {
    signer = provider.getSigner(accounts[0]);
    FCContract = new ethers.Contract(FCContractAddress, FCContractABI, signer);
  });
});
