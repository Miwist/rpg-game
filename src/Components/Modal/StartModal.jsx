import React, { useState } from "react";
import cl from "./StartModal.module.scss";
import wand from "../../img/wand.png";
import swords from "../../img/swords.png";
import spears from "../../img/spears.png";
import { heroList } from "../Info/Character";

const StartModal = () => {
  const [startmodal, setStartModal] = useState(true);
  const [heroId, setHeroId] = useState(0);
  let Hero = JSON.parse(localStorage.getItem("Hero"));

  function closeModal() {
    localStorage.setItem("Hero", JSON.stringify(heroList[heroId]));
    localStorage.setItem("inventory", JSON.stringify([]));
    setStartModal(false);
    window.location.reload();
  }
  function changeWarrior() {
    setHeroId(1);
    closeModal();
  }

  function changeWizzard() {
    setHeroId(0);
    closeModal();
  }
  
  function changeWarwoman() {
    setHeroId(2);
    closeModal();
  }

  if (startmodal === true && Hero === null)
    return (
      <div className={cl.StartModal}>
        <div className={cl.title}>
          <h2>Выберите класс</h2>
        </div>
        <div className={cl.heroes_box}>
          <div className={cl.heroes_item} onClick={changeWizzard}>
            <img src={wand} alt="wand" />
            <h3>Маг</h3>
          </div>
          <div className={cl.heroes_item} onClick={changeWarrior}>
            <img src={swords} alt="swords" />
            <h3>Воин</h3>
          </div>
          <div className={cl.heroes_item} onClick={changeWarwoman}>
            <img src={spears} alt="western" />
            <h3>Воительница</h3>
          </div>
        </div>
      </div>
    );
};

export default StartModal;
