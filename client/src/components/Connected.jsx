import Logo from "../assets/logologin.png";
import "./styles/Login.css";

const Connected = (props) => {
  return (
    <>
    <div className="container">
      <div className="flex">
        {/* First Column */}
        <div className="flex-1">
          <h1 className="heading1">
            Gerbang Suara
          </h1>
          <h2 className="heading2">You are Connected to MetaMask</h2>
          <p className="text-description">
            Metamask Accout : {props.account}
          </p>
        </div>

        {/* Column ke dua*/}
        <div className="flex-1">
          {/* add image */}
          <img src={Logo} alt="Logo" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Connected;
