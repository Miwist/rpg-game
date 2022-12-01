import React, { useState } from "react";
import BattleTrain from "../Gameplay/BattleTrain";
import Infohero from "../Info/Infohero";
import StartModal from "../Modal/StartModal";
import cl from "./Menu.module.scss";
// import { heroList} from "../Info/Character";
import BattleBoss from "../Gameplay/BattleBoss";
import AboutGame from "../Info/AboutGame";
import Inventory from "../Inventory/Inventory";

const Menu = () => {
  const [infocharacter, setInfocharacter] = useState(false);
  const [train, setTrain] = useState(false);
  const [boss, setBoss] = useState(false);
  const [about, setAbout] = useState(false);
  const [openInventory, setOpenInventory] = useState(false);

  let goldHero = JSON.parse(localStorage.getItem("gold"));
  let expHero = JSON.parse(localStorage.getItem("exp"));
  let lvlHero = JSON.parse(localStorage.getItem("level"));
  let damageHero = JSON.parse(localStorage.getItem("damage"));
  let armourHero = JSON.parse(localStorage.getItem("armour"));
  let healthHero = JSON.parse(localStorage.getItem("health"));

  if (expHero >= (99 * lvlHero) / 1.5) {
    localStorage.setItem("exp", JSON.stringify(0));
    localStorage.setItem("level", JSON.stringify(lvlHero + 1));
    localStorage.setItem("damage", JSON.stringify(damageHero + 1));
    localStorage.setItem("health", JSON.stringify(healthHero + 10));
  }

  function changeHero() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className={cl.Menu}>
      <div className={cl.Menu_box}>
        <span onClick={() => setTrain(true)}>Начать тренировку</span>
        <span onClick={() => setBoss(true)}>Сразиться с боссом</span>
        <span>Магазин</span>
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
    </div>
  );
};

export default Menu;
