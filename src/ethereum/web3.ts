import Web3 from "web3";
let web3:Web3;
declare const window:any;
const NETWORK_PROVIDER = 'https://rinkeby.infura.io/v3/7531886b34e74dbf852bc787c8b87ca9';
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(NETWORK_PROVIDER);
  web3 = new Web3(provider);
}

export default web3;

