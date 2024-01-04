import "./styles/Login.css"; // Import the CSS file
import Logo from "../assets/logologin.png";
const Home = (props) => {
  return (
    <div className="container">
    <div className="flex">
      {/* First Column */}
      <div className="flex-1">
          <h1 className="heading1">Welcome to Decentralized Voting Application👋</h1>
          <h2 className="heading2">Gerbang Suara</h2>
          <p className="text-description">
            Gerbang Suara adalah aplikasi e-voting berbasis Blockchain dengan
            mengutamakan kerahasiaan dan keamanan
          </p>
          <button className="login-button" onClick={props.connectWallet}>
            Login MetaMask
          </button>

      </div>

      {/* Second Column */}
      <div className="flex-1">
        {/* Add your image here */}
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  </div>
  );
};

export default Home;
