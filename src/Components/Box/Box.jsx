import React from "react";
import cl from "./Box.module.scss";
import chest from "../../img/chest.png";
import chestOpen from "../../img/openChest.jpg";
import { useState } from "react";
import { useEffect } from "react";

const Box = ({ setOpenBox }) => {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [noMoney, setNoMoney] = useState(false);
  const [win, setWin] = useState("Ничего");
  let hero = JSON.parse(localStorage.getItem("Hero"));
  const [countChest, setCountChest] = useState(0);
  let openChests = JSON.parse(localStorage.getItem("openChest"));

  useEffect(() => {
    hero = JSON.parse(localStorage.getItem("Hero"));
    openChests = JSON.parse(localStorage.getItem("openChest"));
  }, [count]);

  if (hero.exp >= 99 * hero.level * 2 && hero.exp !== 0 && hero !== null) {
    hero.level = hero.level + Math.round(hero.exp / (99 * hero.level) / 2);
    hero.damage = Math.round(hero.damage + hero.level / 2);
    hero.healthPoint = hero.healthPoint + 10 + hero.level;
    hero.exp = 0;
    localStorage.setItem("Hero", JSON.stringify(hero));
  }

  function bounty() {
    if (hero.gold >= 1000) {
      hero.gold = hero.gold - 1000;
      let random = Math.floor(Math.random() * 10);
      setCountChest(countChest + 1);
      localStorage.setItem("openChest", JSON.stringify(countChest));
      setTimeout(setOpen(true), 3000);

      if (random === 1) {
        hero.gold = hero.gold + 500;
        setWin("Поздравляем, вы выиграли 500 монет!");
      } else if (random === 9) {
        hero.damage = hero.damage + 30;
        setWin("Поздравляем, вы выиграли + 30 урона!");
      } else if (random === 4) {
        hero.exp = hero.exp + 500;
        setWin("Поздравляем, Вы выиграли 500 exp!");
      } else if (random === 5) {
        hero.healthPoint = hero.healthPoint + 100;
        setWin("Поздравляем, вы выиграли 100 HP!");
      } else if (random === 7) {
        hero.gold = hero.gold + 1500;
        setWin("Поздравляем, вы выиграли 1500 монет!");
      } else if (random === 8) {
        hero.exp = hero.exp + 1000;
        hero.gold = hero.gold + 1500;
        setWin("Поздравляем, вы выиграли 1000 exp и 1500 монет!");
      } else {
        setWin("Попробуйте ещё раз");
      }

      localStorage.setItem("Hero", JSON.stringify(hero));
      setCount(count + 1);
    } else {
      setNoMoney(true);
    }
  }

  return (
    <div className={cl.Box}>
      {open ? (
        <div className={cl.header}>
          <h2>Ваш выигрыш:</h2>
          <h3>{win}</h3>
          <img src={chestOpen} alt="chest" />
        </div>
      ) : (
        <div>
          <h2>
            Открытых сундуков: <b style={{ color: "red" }}>{openChests}</b>
          </h2>
          <h2>
            Ваше золото: <b style={{ color: "gold" }}>{hero.gold}</b> монет
          </h2>
          <h2>
            Открыть за <b style={{ color: "gold" }}> 1000</b> монет
          </h2>
          <img src={chest} alt="chest" />{" "}
        </div>
      )}
      {noMoney && <h2 style={{ color: "red" }}>Не хватает монет</h2>}
      {open ? (
        <button onClick={() => setOpen(false)}>Назад</button>
      ) : (
        <div className={cl.buttons}>
          <button onClick={bounty}>Открыть</button>
          <button onClick={() => setOpenBox(false)}>Назад</button>
        </div>
      )}
    </div>
  );
};

export default Box;
