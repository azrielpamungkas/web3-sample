import { useState, useEffect } from "react";
import abiJson from "./contractJson/Chai.json";
import { ethers } from "ethers";
import Memos from "./components/Memos";
import Buy from "./components/Buy";
import Vote from "./components/Vote";
import About from './components/About'
import Statistic from './components/Statistic'
// import chai from "./chai.png";
// import './App.css'

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("Not connected");
  useEffect(() => {
    const template = async () => {
      const contractAddres = "0x472364fC4baD07d7AEbc038159dea2A9f7BD5D32";
      const contractABI = abiJson.abi;
      //Metamask part
      //1. In order do transactions on goerli testnet
      //2. Metmask consists of infura api which actually help in connectig to the blockhain
      try {
        const { ethereum } = window;
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        setAccount(account);
        const provider = new ethers.BrowserProvider(ethereum); //read the Blockchain
        const signer = await provider.getSigner(); //write the blockchain

        const contract = new ethers.Contract(
          contractAddres,
          contractABI,
          signer
        );
        // balance = await provider.getBalance("ethers.eth");
        setState({ provider, signer, contract });

        console.log(abiJson.abi);
      } catch (error) {
        console.log(error);
      }
    };
    template();
  }, []);

  return (
    <div>
      {/* <img src={chai} className="img-fluid" alt=".." width="100%" /> */}
      {/* <p style={{ marginTop: "10px", marginLeft: "5px" }}>
        <small>Connected Account - {account}</small>
      </p>

      <Buy state={state} />
      <Memos state={state} /> */}
      <Vote />
      <About/>
      <Statistic/>
    </div>
  );
}

export default App;
