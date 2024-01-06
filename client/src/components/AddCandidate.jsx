import { useEffect } from "react";
import { useContract } from "../Contract";

async function handleForm(contract, { name, image }) {
  console.log(contract);
  if (contract !== null) {
    try {
      const tx = await contract.addCandidate(name, image);
      const receipt = await tx.wait();
      console.log(`receipt: ${receipt}`);
    } catch (error) {
      console.log(error);
    }
  }
}

const AddCandidate = () => {
  const { contract } = useContract();

  useEffect(() => {
    const fetchCandidates = async () => {
      if (contract !== null) {
        const candidatesList = await contract.getAllCandidates();
        const formattedCandidates = candidatesList.map((candidate, index) => {
          return {
            index: index,
            name: candidate.name,
            img: candidate.image,
            // voteCount: ethers.toNumber(candidate.voteCount),
          };
        });
        console.log(formattedCandidates);
      }
    };

    fetchCandidates();
  });
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const data = {
            name: formData.get("name"),
            image: formData.get("image"),
          };
          if (data.name === "" || data.image === "") {
            alert("masukan semua data");
          } else {
            handleForm(contract, data);
          }
          //   setRequestParams(obj);
          //   console.log(obj);
        }}
      >
        <label>
          Nama
          <input name="name" id="name" placeholder="Nama" />
        </label>
        <label>
          Imgurl
          <input name="image" id="image" placeholder="image url" />
        </label>

        <button>Submit</button>
      </form>{" "}
    </div>
  );
};

export default AddCandidate;
