/* eslint-disable react/prop-types */
import Logo from "../assets/gerbangsuara.png";
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
    <>
    <div className="jumbotron">
        <div className="text">
            <h1>Gerbang Suara</h1>  
            <h2>You Are Connected to Metamask 🦊</h2>
            <p>Metamask Account : </p>
            <p>{signerAddress}</p>
        </div>
        <div className="imageprof">
            <img src={Logo} alt="Logo Gerbang Suara" />
        </div>
    </div>
    </>
  );
};

export default Connected;

