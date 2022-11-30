import React, { useState } from "react";
import cl from "./StartModal.module.scss";
import wand from "../../img/wand.png";
import swords from "../../img/swords.png";
import spears from "../../img/spears.png";

const StartModal = () => {
  const [startmodal, setStartModal] = useState(true);
  let changeLater = JSON.parse(localStorage.getItem("Hero"));

  function closeModal() {
    setStartModal(false);
  }

  function changeWarrior() {
    localStorage.setItem("Hero", JSON.stringify("Warrior"));
    localStorage.setItem("heroCount", JSON.stringify("1"));
    localStorage.setItem("gold", JSON.stringify(0));
    localStorage.setItem("exp", JSON.stringify(0));
    localStorage.setItem("level", JSON.stringify(1));
    closeModal();
  }

  function changeWizzard() {
    localStorage.setItem("Hero", JSON.stringify("Wizzard"));
    localStorage.setItem("heroCount", JSON.stringify(0));
    localStorage.setItem("gold", JSON.stringify(0));
    localStorage.setItem("exp", JSON.stringify(0));
    localStorage.setItem("level", JSON.stringify(1));
    closeModal();
  }
  function changeWarwoman() {
    localStorage.setItem("heroCount", JSON.stringify("2"));
    localStorage.setItem("Hero", JSON.stringify("Warwoman"));
    localStorage.setItem("gold", JSON.stringify(0));
    localStorage.setItem("exp", JSON.stringify(0));
    localStorage.setItem("level", JSON.stringify(1));
    closeModal();
  }

  if (startmodal === true && changeLater === null)
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
