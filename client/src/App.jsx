import { useContract } from "./Contract";
import Connected from "./components/Connected";
import Login from "./components/Login";

function App() {
  const { contract, signerAddress, connectToMetamask, isConnected } =
    useContract();

  return (
    <div>
      {isConnected ? (
        <Connected signerAddress={signerAddress} contract={contract} />
      ) : (
        <Login connectWallet={connectToMetamask} />
      )}
    </div>
  );
}

export default App;
