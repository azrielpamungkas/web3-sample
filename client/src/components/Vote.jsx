import { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "../contractJson/Voting.json";
import Login from "./Login";
import Finished from "./Finished";
import Connected from "./Connected";
// import "./App.css";

function Vote() {
  const [contract, setContract] = useState(null);
  const contractAbi = abi.abi;
  const contractAddress = "0x2aA20305a6E6C9e24dFf975858CC4C51D75fF0De";
  const [isConnected, setIsConnected] = useState(false);
  const [isVoteActive, setIsVoteActive] = useState(false);
  const [isExist, setIsExist] = useState(false);
  const [signerAddress, setSignerAddress] = useState(false);
  const [remainingTime, setRemainingTime] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [number, setNumber] = useState("");

  useEffect(() => {
    connectToMetamask();
    getCandidates();
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleAccountsChanged);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged
        );
      }
    };
  }, [signerAddress]);

  function handleAccountsChanged(accounts) {
    if (accounts.length > 0 && signerAddress !== accounts[0]) {
      setSignerAddress(accounts[0]);
    } else {
      setIsConnected(false);
      setSignerAddress(null);
    }
  }

  async function connectToMetamask() {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []).then(async () => {});
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        const contractInstance = new ethers.Contract(
          contractAddress,
          contractAbi,
          signer
        );
        const time = await contractInstance.getRemainingTime();
        const status = await contractInstance.getVotingStatus();
        const voteStatus = await contractInstance.voters(signer);

        setContract(contractInstance);
        setSignerAddress(address);
        setIsConnected(true);
        setRemainingTime(parseInt(time, 16));
        setIsVoteActive(status);
        setIsExist(voteStatus);

        // console.log("Metamask Connected : " + address);
      } catch (err) {
        // console.error(err);
      }
    } else {
      console.error("Metamask is not detected in the browser");
    }
  }

  async function vote() {
    if (contract !== null) {
      const tx = await contract.vote(number);
      await tx.wait();
      // canVote();
    }
  }

  async function getCandidates() {
    if (contract !== null) {
      const candidatesList = await contract.getAllVotesOfCandiates();
      const formattedCandidates = candidatesList.map((candidate, index) => {
        return {
          index: index,
          name: candidate.name,
          voteCount: ethers.toNumber(candidate.voteCount),
        };
      });
      setCandidates(formattedCandidates);
    }
  }

  async function handleNumberChange(e) {
    setNumber(e.target.value);
  }

  return (
    <div className="App">
       <Connected
            account={signerAddress}
            candidates={candidates}
            // remainingTime={remainingTime}
            number={number}
            handleNumberChange={handleNumberChange}
            voteFunction={vote}
            isExist={isExist}
          />
      {/* {isConnected ? (
        isVoteActive ? (
          <Connected
            account={signerAddress}
            candidates={candidates}
            // remainingTime={remainingTime}
            number={number}
            handleNumberChange={handleNumberChange}
            voteFunction={vote}
            isExist={isExist}
          />
        ) : (
          <Finished />
        )
      ) : (
        <Login connectWallet={connectToMetamask} />
      )} */}
    </div>
  );
}

export default Vote;
