import React, { useState, useEffect } from "react";
import "./MediumScreen.module.css";
import FirstComponent from "../../components/FirstComponent";
import SecondComponent from "../../components/SecondComponent";
import ThirdComponent from "../../components/ThirdComponent";

const MediumScreen = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMediumScreen(window.innerWidth >= 481 && window.innerWidth <= 767);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      {isMediumScreen && (
        <>
          <FirstComponent />
        </>
      )}
    </>
  );
};

export default MediumScreen;
