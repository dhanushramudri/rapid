import React, { useState, useEffect } from "react";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import Sidebar from "./Sidebar";

const Home = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 481);

      setIsMediumScreen(window.innerWidth >= 481 && window.innerWidth <= 767);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <>
      {isSmallScreen ? (
        <div className="container">
          <React.Fragment>
            <FirstComponent />
            <SecondComponent />
            <ThirdComponent />
          </React.Fragment>
        </div>
      ) : isMediumScreen ? (
        <div className="container">
          <React.Fragment>
            <FirstComponent />
            <SecondComponent />
            <ThirdComponent />
          </React.Fragment>
        </div>
      ) : (
        <div className="container">
          <React.Fragment>
            <Sidebar />
            <FirstComponent />
            <SecondComponent />
            <ThirdComponent />
          </React.Fragment>
        </div>
      )}
    </>
  );
};

export default Home;
