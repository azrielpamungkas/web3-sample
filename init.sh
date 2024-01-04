#!/bin/bash

# Step 1: Compile using npx hardhat compile
echo "Step 1: Compiling..."
npx hardhat compile
echo "Compilation completed."

# Step 2: Move contents from artifacts/contracts to client/src/contractJson/
echo "Step 2: Moving contract artifacts..."
mkdir -p client/src/contractJson
cp -r artifacts/contracts/Election.sol/* client/src/contracts/
echo "Contract artifacts moved to client/src/contractJson/."

# Step 3: Run deployment script using npx hardhat run scripts/deploy.js
echo "Step 3: Running deployment script..."
npx hardhat run --network goerli scripts/deploy.js
echo "Deployment script executed successfully."

echo "All steps completed."

