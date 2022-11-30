import React, { useEffect, useState } from "react";
import cl from "./Infohero.module.scss";
import { heroList } from "../Info/Character";

const Infohero = ({ setInfocharacter }) => {
  let heroCount = JSON.parse(localStorage.getItem("heroCount"));
  let Hero = JSON.parse(localStorage.getItem("Hero"));
  let goldHero = JSON.parse(localStorage.getItem("gold"));
  let expHero = JSON.parse(localStorage.getItem("exp"));
  let lvlHero = JSON.parse(localStorage.getItem("level"));

  if (expHero >= 100) {
    localStorage.setItem("exp", JSON.stringify(0));
    localStorage.setItem("level", JSON.stringify(lvlHero + 1));
  }

  return (
    <div className={cl.characterModal}>
      <div className={cl.hero_box}>
        <h3>Герой: {Hero}</h3>
        <img src={heroList[heroCount].img} alt={heroList[heroCount].name} />
        <div className={cl.description}>
          <h3>Характеристики:</h3>
          <p>Уровень: {lvlHero}</p>
          <p>Опыт: {expHero} exp</p>
          <p>Урон: {heroList[heroCount].damage}</p>
          <p>Броня: {heroList[heroCount].armour}</p>
          <p>Здоровье: {heroList[heroCount].healthPoint}</p>
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
