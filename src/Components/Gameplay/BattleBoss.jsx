import React, { useEffect, useState } from "react";
import cl from "./BattleTrain.module.scss";
import { heroList, bossList } from "../Info/Character";
import FinalBattle from "./BossFinal";
import GameOver from "./GameOver";

const BattleBoss = ({ setBoss }) => {
  let heroCount = JSON.parse(localStorage.getItem("heroCount"));

  let hero = JSON.parse(localStorage.getItem("Hero"));
  const [move, setMove] = useState(0);
  const [attack, setAttack] = useState(false);
  const [attackMonster, setAttackMonster] = useState(false);
  const [damage, setDamage] = useState(0);
  const [damageMonster, setDamageMonster] = useState(0);
  const [final, setFinal] = useState(false);
  const [gameover, setGameover] = useState(false);
  const [critical, setCritical] = useState(0);

  let heroHP = hero.healthPoint - damageMonster;
  let monsterHP = bossList[0].healthPoint - damage;
  let width = 120;

  function heroAttack() {
    setAttack(true);
    setDamage(damage + hero.damage);
    End();
    function noAttack() {
      setAttack(false);
    }
    setTimeout(noAttack, 100);
  }

  useEffect(() => {
    End();
  }, [monsterHP]);

  useEffect(() => {
    End();
  }, [heroHP]);

  function attackShow() {
    setAttackMonster(true);

    let random = Math.floor(Math.random() * 11);

    if (random > 5) {
      setCritical(true);
      setDamageMonster(100 * random);
    }

    setTimeout(noAttack, 500);
    setMove(move - 50);
    End();
    function noAttack() {
      setMove(0);
      setAttackMonster(false);
      setCritical(false);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      attackShow();
      setDamageMonster(damageMonster + bossList[0].damage);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (hero.exp >= (99 * hero.level) / 2 && hero.exp !== 0 && hero !== null) {
    hero.level = hero.level + Math.round(hero.exp / (99 * hero.level) / 2);
    hero.damage = hero.damage + Math.round(hero.exp / (99 * hero.level) / 2);
    hero.healthPoint =
      hero.healthPoint + 30 * Math.round(hero.exp / (99 * hero.level) / 2);
    hero.exp = 0;
    localStorage.setItem("Hero", JSON.stringify(hero));
  }

  function End() {
    if (heroHP <= 0) {
      setGameover(true);
    } else if (monsterHP <= 0) {
      monsterHP = 0;
      hero.gold = hero.gold + bossList[0].gold;
      hero.exp = hero.exp + bossList[0].exp;
      localStorage.setItem("Hero", JSON.stringify(hero));
      setFinal(true);
    }
  }

  return (
    <div className={cl.battleArea}>
      {attackMonster ? (
        <p style={{ color: "red", opacity: "1" }}>Вас бьют!</p>
      ) : (
        <p style={{ opacity: "0" }}>Вас бьют!</p>
      )}
      {critical && (
        <p style={{ color: "red" }}>
          Нанесён критический урон: {damageMonster}
        </p>
      )}
      <div className={cl.battlePlace} onClick={heroAttack}>
        <div className={cl.hero}>
          <h3 style={{ marginBottom: "5px" }}>{hero.level} lvl</h3>
          {attackMonster ? (
            <p style={{ color: "red", opacity: "1", marginBottom: "10px" }}>
              -{bossList[0].damage}
            </p>
          ) : (
            <p style={{ opacity: "0" }}>-{bossList[0].damage}</p>
          )}
          <div className={cl.health}>
            <div
              className={cl.inProgress}
              style={{
                background: "green",
                width: width - damageMonster / (hero.healthPoint / width),
                height: "100%",
              }}
            >
              {heroHP}
            </div>
          </div>
          <div className={cl.heroIcon}>
            <img className={cl.heroImg} src={hero.img} alt={hero.name} />
          </div>
        </div>

        <div
          className={cl.monster}
          style={{ transform: `translateX(${move}%` }}
        >
          <h3 style={{ color: "red" }}>{bossList[0].name}</h3>
          {attack ? (
            <p style={{ color: "white", opacity: "1", marginBottom: "10" }}>
              -{hero.damage}
            </p>
          ) : (
            <p style={{ opacity: "0" }}>-{hero.damage}</p>
          )}
          <div className={cl.health}>
            <div
              className={cl.inProgress}
              style={{
                background: "red",
                width: width - damage / (bossList[0].healthPoint / width),
                height: "100%",
              }}
            >
              {bossList[0].healthPoint - damage}
            </div>
          </div>
          <img src={bossList[0].img} alt={hero.name} />
        </div>
      </div>
      <div className={cl.skills} onClick={heroAttack}>
        <img src={hero.weapon} alt={heroList.weapon} />
      </div>
      <h3>Атаковать</h3>
      {final && <FinalBattle setBoss={setBoss} />}
      {gameover && <GameOver setTrain={setBoss} />}
    </div>
  );
};

export default BattleBoss;
