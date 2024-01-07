import React from "react";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div className="container">
      <Sidebar />
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
    </div>
  );
};

export default Home;
