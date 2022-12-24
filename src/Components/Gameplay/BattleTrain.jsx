import React, { useEffect, useState } from "react";
import cl from "./BattleTrain.module.scss";
import { monsterList } from "../Info/Character";
import FinalBattle from "./FinalBattle";
import GameOver from "./GameOver";

const BattleTrain = ({ setTrain }) => {
  let hero = JSON.parse(localStorage.getItem("Hero"));

  let monsterCount = JSON.parse(localStorage.getItem("monsterCount"));
  const [attack, setAttack] = useState(false);
  const [attackMonster, setAttackMonster] = useState(false);
  const [damage, setDamage] = useState(0);
  const [damageMonster, setDamageMonster] = useState(100);
  const [final, setFinal] = useState(false);
  const [gameover, setGameover] = useState(false);
  const [move, setMove] = useState(0);
  
  let monster = monsterList[monsterCount];
  let heroHP = hero.healthPoint - damageMonster;
  let monsterHP = monster.healthPoint - damage;
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

  function attackShow() {
    setAttackMonster(true);
    setTimeout(noAttack, 500);
    setMove(move - 50);
    End();
    function noAttack() {
      setMove(0);
      setAttackMonster(false);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      attackShow();
      setDamageMonster((damageMonster) => damageMonster + monster.damage);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function End() {
    if (heroHP <= 0) {
      setGameover(true);
      heroHP = 0;
    } else if (monsterHP <= 0) {
      setFinal(true);
      monsterHP = 0;
      monsterHP = 0;
      hero.gold = hero.gold + monster.gold;
      hero.exp = hero.exp + monster.exp;
      localStorage.setItem("Hero", JSON.stringify(hero));
    }
  }

  return (
    <div className={cl.battleArea}>
      {attackMonster ? (
        <h3 style={{ color: "red", opacity: "1" }}>Вас бьют!</h3>
      ) : (
        <h3 style={{ opacity: 0 }}>Вас бьют!</h3>
      )}
      <div className={cl.battlePlace} onClick={heroAttack}>
        <div className={cl.hero}>
          <h3 style={{ marginBottom: "5px" }}>{hero.level} lvl</h3>
          {attackMonster ? (
            <p style={{ color: "red", opacity: "1", marginBottom: "10px" }}>
              -{monster.damage}
            </p>
          ) : (
            <p style={{ opacity: "0" }}>-{monster.damage}</p>
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
          <h3 style={{ marginBottom: "5px" }}>{monster.level} lvl</h3>
          <h3 style={{ color: "red" }}>{monster.name}</h3>
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
                width: width - damage / (monster.healthPoint / width),
                height: "100%",
              }}
            >
              {monster.healthPoint - damage}
            </div>
          </div>
          <img src={monster.img} alt={monster.name} />
        </div>
      </div>
      <div className={cl.skills} onClick={heroAttack}>
        <img src={hero.weapon} alt={hero.weapon} />
      </div>
      <h3>Атаковать</h3>
      {final && <FinalBattle setTrain={setTrain} />}
      {gameover && <GameOver setTrain={setTrain} />}
    </div>
  );
};

export default BattleTrain;
