import React from "react";
import cl from "./BattleTrain.module.scss";
import { monsterList } from "../Info/Character";

const FinalBattle = ({ setTrain }) => {
  let monsterCount = JSON.parse(localStorage.getItem("monsterCount"));
  let monster = monsterList[monsterCount];
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
