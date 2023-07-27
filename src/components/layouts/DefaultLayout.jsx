import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

import { useEffect } from "react";
import axios from "axios";
import { initiateFavourites, setMainData } from "../../slices/dataSlice";
import { useDispatch } from "react-redux";
const DefaultLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // fetch data once the app loads and set it inside the data slice
    const fetchData = async () => {
      try {
        let res = await axios.get("https://api.npoint.io/10aea263260ef40221bf");
        dispatch(setMainData(res.data));
        let localStorageData = JSON.parse(localStorage.getItem("favourites"));
        dispatch(initiateFavourites(localStorageData ? localStorageData : {}));
      } catch (error) {
        console.log("error fetching data:", error);
      }
    };
    fetchData();
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
