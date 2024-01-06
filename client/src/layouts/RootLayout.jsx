import { Outlet } from "react-router-dom";
import Navbar from "../components/NavbarComponent";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
