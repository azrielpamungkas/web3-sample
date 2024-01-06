import { useContract } from "../Contract";

async function AddCandidates({ number }) {
  const { contract } = useContract();

  if (contract !== null) {
    const tx = await contract.vote(number);
    await tx.wait();
  }
}

export default AddCandidates;
