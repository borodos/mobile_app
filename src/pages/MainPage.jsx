import React from "react";

import "../styles/MainPage.scss";
import MobileCard from "../components/UI/MobileCard";
import { mobilesData } from "../mokData";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MainPage = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.authUserSlice.user);

  return (
    <section className='main'>
      <div className='main__wrapper'>
        <h1 className='main__title'>КАТАЛОГ</h1>
        <div className='main__content'>
          {mobilesData.map((value, index) => (
            <MobileCard key={`${value}-${index}`} mobile={value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainPage;
