import React from "react";
import cl from "./Infohero.module.scss";

const Infohero = ({ setInfocharacter }) => {
  let hero = JSON.parse(localStorage.getItem("Hero"));
  return (
    <div className={cl.characterModal}>
      <div className={cl.hero_box}>
        <h3>{hero.name}</h3>
        <img src={hero.img} alt={hero.name} />
        <div className={cl.description}>
          <h3>Характеристики:</h3>
          <p>Имя: {hero.userName}</p>
          <p>Уровень: {hero.level}</p>
          <p>Опыт: {hero.exp} exp</p>
          <p>Урон: {hero.damage}</p>
          <p>Броня: {hero.armour}</p>
          <p>Здоровье: {hero.healthPoint}</p>
          <p>
            Золото: <i style={{ color: "gold" }}>{hero.gold}</i>
          </p>
          <button type="button" onClick={() => setInfocharacter(false)}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default Infohero;
