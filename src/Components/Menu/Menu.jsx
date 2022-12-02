import React, { useState } from "react";
import BattleTrain from "../Gameplay/BattleTrain";
import Infohero from "../Info/Infohero";
import StartModal from "../Modal/StartModal";
import cl from "./Menu.module.scss";
// import { heroList} from "../Info/Character";
import BattleBoss from "../Gameplay/BattleBoss";
import AboutGame from "../Info/AboutGame";
import Inventory from "../Inventory/Inventory";
import ChangeLevel from "../Modal/ChangeLevel";
import Score from "../Score/Score";

const Menu = () => {
  const [infocharacter, setInfocharacter] = useState(false);
  const [train, setTrain] = useState(false);
  const [boss, setBoss] = useState(false);
  const [about, setAbout] = useState(false);
  const [openScore, setOpenScore] = useState(false);
  const [openInventory, setOpenInventory] = useState(false);
  const [change, setChange] = useState(false);
  let heroCount = JSON.parse(localStorage.getItem("heroCount"));
  let damageHero = JSON.parse(localStorage.getItem("damage"));
  let healthHero = JSON.parse(localStorage.getItem("health"));
  let expHero = JSON.parse(localStorage.getItem("exp"));
  let lvlHero = JSON.parse(localStorage.getItem("level"));

  function changeHero() {
    localStorage.clear();
    window.location.reload();
  }

  if (expHero >= (99 * lvlHero) / 1.5 && expHero !== 0) {
    localStorage.setItem("level", JSON.stringify(lvlHero + 1));
    localStorage.setItem("damage", JSON.stringify(damageHero + 1));
    localStorage.setItem("health", JSON.stringify(healthHero + 10));
    localStorage.setItem("exp", JSON.stringify(0));
  }

  return (
    <div className={cl.Menu}>
      <div className={cl.Menu_box}>
        <span onClick={() => setChange(true)}>Начать тренировку</span>
        <span onClick={() => setBoss(true)}>Сразиться с боссом</span>
        <span onClick={() => setOpenScore(true)}>Магазин</span>
        <span onClick={() => setInfocharacter(true)}>Персонаж</span>
        <span onClick={() => setOpenInventory(true)}>Инвентарь</span>
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
    </div>
  );
};

export default Menu;
