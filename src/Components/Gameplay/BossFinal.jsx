import React from "react";
import cl from "./BattleTrain.module.scss";
import { bossList } from "../Info/Character";
import { useState } from "react";


const BossFinal = ({ setBoss }) => {
  let id = JSON.parse(localStorage.getItem("boss"));
  const [endGame, setEndGame] = useState(false);

  function closeFinal() {
    if (id <= 1) {
      localStorage.setItem("boss", JSON.stringify(id + 1));
      setBoss(false);
    }
    if (id == 2) {
      setEndGame(true);
    }
  }

  function storyEnd() {
    setBoss(false);
  }

  return (
    <div className={cl.FinalBattle}>
      {endGame && (
        <div className={cl.FinalBattle}>
          <h2>Вы прошли игру!</h2>
          <p>
            Король блогадорит вас и предлагает остаться жить в этом королевстве
          </p>
          <button type="button" onClick={storyEnd}>
            закрыть
          </button>
        </div>
      )}
      <h2>Бой завершён</h2>
      <h3>Ваша награда: </h3>
      <p>Опыт: {bossList[id].exp} exp</p>
      <p>Золото: {bossList[id].gold} монет</p>
      <button type="button" onClick={closeFinal}>
        закрыть
      </button>
    </div>
  );
};

export default BossFinal;
