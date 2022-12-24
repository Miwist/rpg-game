import React from "react";
import cl from "./BattleTrain.module.scss";
import { monsterList } from "../Info/Character";

const FinalBattle = ({ setTrain }) => {
  let monsterCount = JSON.parse(localStorage.getItem("monsterCount"));
  let monster = monsterList[monsterCount];

  let hero = JSON.parse(localStorage.getItem("Hero"));

  if (hero.exp >= (99 * hero.level) / 1.5 && hero.exp !== 0 && hero !== null) {
    hero.level = hero.level + 1;
    hero.damage = hero.damage + 1;
    hero.healthPoint = hero.healthPoint + 10;
    hero.exp = 0;
    localStorage.setItem("Hero", JSON.stringify(hero));
  }

  return (
    <div className={cl.FinalBattle}>
      <h2>Бой завершён</h2>
      <h3>Ваша награда: </h3>
      <p>Опыт: {monster.exp} exp</p>
      <p>Золото: {monster.gold} gold</p>
      <button type="button" onClick={() => setTrain(false)}>
        закрыть
      </button>
    </div>
  );
};

export default FinalBattle;
