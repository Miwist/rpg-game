import React, { useEffect, useState } from "react";
import BattleTrain from "../Gameplay/BattleTrain";
import Infohero from "../Info/Infohero";
import StartModal from "../Modal/StartModal";
import cl from "./Menu.module.scss";


const Menu = () => {
  const [infocharacter, setInfocharacter] = useState(false);
  const [train, setTrain] = useState(false);

  let Hero = JSON.parse(localStorage.getItem("Hero"));
  let heroCount = JSON.parse(localStorage.getItem("heroCount"));
 
  return (
    <div className={cl.Menu}>
      <div className={cl.Menu_box}>
        <span onClick={() => setTrain(true)}>Начать тренировку</span>
        <span>Сразиться с боссом</span>
        <span>Магазин</span>
        <span onClick={() => setInfocharacter(true)}>Персонаж</span>
        <span>Инвентарь</span>
        <span>Об игре</span>
      </div>
      <StartModal />
      {infocharacter === true && (
        <Infohero setInfocharacter={setInfocharacter} />
      )}

      {train === true && <BattleTrain setTrain={setTrain} />}
    </div>
  );
};

export default Menu;
