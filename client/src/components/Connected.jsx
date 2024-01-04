/* eslint-disable react/prop-types */
import Logo from "../assets/logologin.png";
import "./styles/Login.css";
import { useEffect } from "react";
import { ethers } from "ethers";

const Connected = ({ contract, signerAddress }) => {
  useEffect(() => {
    getCandidates();
  }, []);

  async function getCandidates() {
    if (contract !== null) {
      const candidatesList = await contract.getAllCandidates();
      const formattedCandidates = candidatesList.map((candidate, index) => {
        return {
          index: index,
          name: candidate.name,
          img: candidate.image,
          voteCount: ethers.toNumber(candidate.voteCount),
        };
      });
      console.log(formattedCandidates);
    }
  }

  return (
    <div className="container">
      <div className="wrap">
        <div className="heading-one">
          <h1 className="heading-one-title">Gerbang Suara</h1>
          <h2 className="heading-one-connect">You Are Connected to MetaMask</h2>
          <p className="text-description">MetaMask Account : {signerAddress}</p>
        </div>
        <div className="heading-two">
          <img src={Logo} alt="Logo Login Page" />
        </div>
      </div>
    </div>
  );
};

export default Connected;
