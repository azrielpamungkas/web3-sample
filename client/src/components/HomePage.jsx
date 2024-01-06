import { useContract } from "../Contract";
import ConnectedPage from "../components/ConnectedPage";
import LoginPage from "../components/LoginPage";

function HomePage() {
  const { contract, signerAddress, connectToMetamask, isConnected } =
    useContract();

  return (
    <div>
      {isConnected ? (
        <ConnectedPage signerAddress={signerAddress} contract={contract} />
      ) : (
        <LoginPage connectWallet={connectToMetamask} />
      )}
      {/* <Login connectWallet={connectToMetamask} /> */}
    </div>
  );
}

export default HomePage;
