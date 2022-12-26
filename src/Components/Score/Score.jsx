import React, { useEffect } from "react";
import cl from "./Score.module.scss";
import gold from "../../img/gold.png";
import { useState } from "react";
import { itemsAll } from "./Items";
import morgen from "../../img/morgen.png";

const Score = ({ setOpenScore }) => {
  const [buy, setBuy] = useState(false);
  const [noMoney, setNoMoney] = useState(false);
  const [count, setCount] = useState(0);

  let hero = JSON.parse(localStorage.getItem("Hero"));
  let score = JSON.parse(localStorage.getItem("score"));
  let goldHero = hero.gold;
  const [itemId, setItemId] = useState(0);
  let inventory = JSON.parse(localStorage.getItem("inventory"));

  let itemForIndex = score.filter((t) => t.id === itemId);
  let index = score.indexOf(itemForIndex[0]);

  useEffect(() => {
    score = JSON.parse(localStorage.getItem("score"));
  }, [count]);

  function buyItem() {
    if (hero.gold >= score[index].price) {
      hero.gold = hero.gold - score[index].price;

      inventory.push(score[index]);
      if (itemId === 0) {
        hero.healthPoint = hero.healthPoint + 250;
      }
      if (itemId === 1) {
        hero.healthPoint = hero.healthPoint + 600;
      }
      if (itemId === 2) {
        hero.spell = morgen;
      }
      if (itemId === 3) {
        hero.damage = hero.damage * 2;
      }

      if (itemId === 4) {
        hero.damage = hero.damage * 15;
        hero.level = hero.level * 15;
        hero.gold = hero.gold * 10;
      }

      if (itemId === 5) {
        hero.img = score[index].img;
      }

      if (itemId === 6) {
        hero.img = score[index].img;
      }

      localStorage.setItem("inventory", JSON.stringify(inventory));
      localStorage.setItem("Hero", JSON.stringify(hero));

      score.splice(index, 1);
      localStorage.setItem("score", JSON.stringify(score));
      setCount(count + 1);
      setBuy(false);
    } else {
      setBuy(false);
      setNoMoney(true);
    }
  }

  return (
    <div className={cl.score}>
      <div className={cl.title}>
        <h3>Магазин</h3>
      </div>
      <div className={cl.description}>
        <div className={cl.gold_box}>
          <img src={gold} alt="gold" className={cl.gold_item} /> {goldHero}
        </div>
      </div>

      <div className={cl.score_box}>
        {score.map((item) => (
          <div onClick={() => setItemId(item.id)}>
            <div className={cl.score_boxItem} onClick={() => setBuy(true)}>
              <h4>{item.name}</h4>
              <img src={item.img} alt={item.name} />
              <p>{item.description}</p>
              <p>Цена: {item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {buy && (
        <div className={cl.modalScore}>
          <h2>Вы точно хотите купить предмет?</h2>
          <button onClick={buyItem}>Купить</button>
          <button onClick={() => setBuy(false)}>Назад</button>
        </div>
      )}
      {noMoney && (
        <div className={cl.modalScore}>
          <h2>Недостаточно монет</h2>
          <button onClick={() => setNoMoney(false)}>Назад</button>
        </div>
      )}
      <button type="button" onClick={() => setOpenScore(false)}>
        Закрыть
      </button>
    </div>
  );
};

export default Score;
