import { useContract } from "../Contract";
import { ethers } from "hardhat";

async function GetCandidates() {
  const { contract } = useContract();
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
    return formattedCandidates;
  }
}

export default GetCandidates;
