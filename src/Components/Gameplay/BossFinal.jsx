import React from "react";
import cl from "./BattleTrain.module.scss";
import { bossList } from "../Info/Character";

const BossFinal = ({ setBoss }) => {
  let hero = JSON.parse(localStorage.getItem("Hero"));



  return (
    <div className={cl.FinalBattle}>
      <h2>Бой завершён</h2>
      <h3>Ваша награда: </h3>
      <p>Опыт: {bossList[0].exp} exp</p>
      <p>Золото: {bossList[0].gold} gold</p>
      <button type="button" onClick={() => setBoss(false)}>
        закрыть
      </button>
    </div>
  );
};

export default BossFinal;
