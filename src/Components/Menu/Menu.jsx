import React, { useState } from "react";
import BattleTrain from "../Gameplay/BattleTrain";
import Infohero from "../Info/Infohero";
import StartModal from "../Modal/StartModal";
import cl from "./Menu.module.scss";
import BattleBoss from "../Gameplay/BattleBoss";
import AboutGame from "../Info/AboutGame";
import Inventory from "../Inventory/Inventory";
import ChangeLevel from "./ChangeLevel";
import Score from "../Score/Score";
import Box from "../Box/Box";

const Menu = () => {
  const [infocharacter, setInfocharacter] = useState(false);
  const [train, setTrain] = useState(false);
  const [boss, setBoss] = useState(false);
  const [about, setAbout] = useState(false);
  const [openScore, setOpenScore] = useState(false);
  const [openInventory, setOpenInventory] = useState(false);
  const [change, setChange] = useState(false);
  const [openBox, setOpenBox] = useState(false);
  function changeHero() {
    localStorage.clear();
    window.location.reload();
  }


  return (
    <div className={cl.Menu}>
      <div className={cl.Menu_box}>
        <span onClick={() => setChange(true)}>Начать тренировку</span>
        <span onClick={() => setBoss(true)}>Сразиться с боссом</span>

        <span onClick={() => setOpenScore(true)}>Магазин</span>
        <span onClick={() => setInfocharacter(true)}>Персонаж</span>
        <span onClick={() => setOpenInventory(true)}>Инвентарь</span>
        <span onClick={() => setOpenBox(true)}>Открыть сундук</span>
        <span onClick={() => setAbout(true)}>Об игре</span>
        <span onClick={changeHero}>Сменить персонажа</span>
      </div>
      <StartModal />
      {infocharacter === true && (
        <Infohero setInfocharacter={setInfocharacter} />
      )}
      {train && <BattleTrain setTrain={setTrain} />}
      {boss && <BattleBoss setBoss={setBoss} />}
      {about && <AboutGame setAbout={setAbout} />}
      {openInventory && <Inventory setOpenInventory={setOpenInventory} />}
      {change && <ChangeLevel setTrain={setTrain} setChange={setChange} />}
      {openScore && <Score setOpenScore={setOpenScore} />}
      {openBox && <Box setOpenBox={setOpenBox} />}
    </div>
  );
};

export default Menu;
