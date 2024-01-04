/* eslint-disable react/prop-types */
import "./styles/Login.css"; // Import the CSS file
import Logo from "../assets/logologin.png";
const Home = ({ connectWallet }) => {
  return (
    <div className="container">
      <div className="wrap">
        <div className="heading-one">
          <h1 className="heading-one-title-login">Welcome to Decentralized Voting Application👋</h1>
          <h2 className="heading-one-connect">Demokrasi tanpa keraguan</h2>
          <p className="text-description-login"> Gerbang Suara adalah aplikasi e-voting berbasis Blockchain dengan mengutamakan kerahasiaan dan keamanan</p>
          <button className="login-button" onClick={connectWallet}>
             Login MetaMask
          </button>
        </div>
        <div className="heading-two">
          <img src={Logo} alt="Logo Login Page" />
        </div>
      </div>
    </div>
  );
};

export default Home;
