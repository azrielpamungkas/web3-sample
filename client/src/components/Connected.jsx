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
      <div className="flex">
        {/* First Column */}
        <div className="flex-1">
          <h1 className="heading1">Gerbang Suara</h1>
          <h2 className="heading2">You are Connected to MetaMask</h2>
          <p className="text-description">Metamask Accout : {signerAddress}</p>
        </div>

        {/* Column ke dua*/}
        <div className="flex-1">
          {/* add image */}
          <img src={Logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Connected;
