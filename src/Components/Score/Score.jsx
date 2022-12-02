import React from "react";
import cl from "./Score.module.scss";
import gold from "../../img/gold.png";
import { itemsAll } from "./Items";

const Score = ({ setOpenScore }) => {
  let goldHero = JSON.parse(localStorage.getItem("gold"));

  return (
    <div className={cl.score}>
      <div className={cl.title}>
        <h3>Инвентарь</h3>
      </div>
      <div className={cl.description}>
        <div className={cl.gold_box}>
          <img src={gold} alt="gold" className={cl.gold_item} /> {goldHero}
        </div>
      </div>
      <div className={cl.score_box}>
        <div className={cl.score_boxItem}>
        
     
        </div>
      </div>

      <button type="button" onClick={() => setOpenScore(false)}>
        Закрыть
      </button>
    </div>
  );
};

export default Score;
