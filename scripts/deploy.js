const path = require("path");
const fs = require("fs");
const currentPath = __dirname;
const parrentPath = path.resolve(currentPath, "..");
const filePath = path.join(parrentPath, "client/src/contracts/getContract.js");

async function main() {
  const Voting = await ethers.getContractFactory("Election");

  // Start deployment, returning a promise that resolves to a contract object
  const Voting_ = await Voting.deploy(90);
  const text = `const contractAddress = "${Voting_.target}";
  export { contractAddress };`;
  try {
    fs.writeFileSync(filePath, text);
    // file written successfully
    console.log(`Success create file contract`);
  } catch (err) {
    console.log(`Failed create file contract on ${currentPath}`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
