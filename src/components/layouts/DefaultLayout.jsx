import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
