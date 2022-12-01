import React from "react";
import cl from "./Infohero.module.scss";
import { heroList } from "../Info/Character";

const Infohero = ({ setInfocharacter }) => {
  let heroCount = JSON.parse(localStorage.getItem("heroCount"));
  let goldHero = JSON.parse(localStorage.getItem("gold"));
  let expHero = JSON.parse(localStorage.getItem("exp"));
  let lvlHero = JSON.parse(localStorage.getItem("level"));
  let damageHero = JSON.parse(localStorage.getItem("damage"));
  let armourHero = JSON.parse(localStorage.getItem("armour"));
  let healthHero = JSON.parse(localStorage.getItem("health"));

  return (
    <div className={cl.characterModal}>
      <div className={cl.hero_box}>
        <h3>Герой: {heroList[heroCount].name}</h3>
        <img src={heroList[heroCount].img} alt={heroList[heroCount].name} />
        <div className={cl.description}>
          <h3>Характеристики:</h3>
          <p>Уровень: {lvlHero}</p>
          <p>Опыт: {expHero} exp</p>
          <p>Урон: {damageHero}</p>
          <p>Броня: {armourHero}</p>
          <p>Здоровье: {healthHero}</p>
          <p>Мана: {heroList[heroCount].manaPoint}</p>
          <p>Удача: {heroList[heroCount].luck}</p>
          <p>Золото: {goldHero}</p>
        </div>
        <button type="button" onClick={() => setInfocharacter(false)}>
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default Infohero;
