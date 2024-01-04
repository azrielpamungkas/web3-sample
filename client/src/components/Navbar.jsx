import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="header-left">
        <div className="crop-logo">
          <img className="logo" src={Logo} alt="Logo gerbang suara" />
        </div>
      </div>

      <div className="header-right">
        <Link to="/">Home</Link>
        <Link to="/voting">Voting</Link>
        <Link to="/statistic">Statistics</Link>
        <Link to="/about">About</Link>
      </div>
    </header>
  );
};

export default Navbar;
