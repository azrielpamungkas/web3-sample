/* eslint-disable react/prop-types */
import "./styles/Login.css"; // Import the CSS file
import Logo from "../assets/Gerbang Suara (5).png";
const Home = ({ connectWallet }) => {
  return (
    <>
    <div className="jumbotron">
        <div className="text">
            <h1>Gerbang Suara</h1>  
            <h2>Welcome to Decentralized Voting Application👋</h2>
            <h3>Demokrasi Tanpa Keraguan</h3>
            <p>Gerbang Suara adalah aplikasi e-voting berbasis Blockchain dengan mengutamakan kerahasiaan dan keamanan</p>
            <button onClick={connectWallet}>Login MetaMask</button>
        </div>
        <div className="imageprof">
            <img src={Logo} alt="Logo Gerbang Suara" />
        </div>
    </div>
    </>
  );
};

export default Home;
