import React, { useEffect, useState } from "react";
import cl from "./BattleTrain.module.scss";
import { heroList, monsterList } from "../Info/Character";
import FinalBattle from "./FinalBattle";
import GameOver from "./GameOver";

const BattleTrain = ({ setTrain }) => {
  let heroCount = JSON.parse(localStorage.getItem("heroCount"));
  let goldHero = JSON.parse(localStorage.getItem("gold"));
  let expHero = JSON.parse(localStorage.getItem("exp"));
  let lvlHero = JSON.parse(localStorage.getItem("level"));
  let damageHero = JSON.parse(localStorage.getItem("damage"));
  let healthHero = JSON.parse(localStorage.getItem("health"));
  let monsterCount = JSON.parse(localStorage.getItem("monsterCount"));
  const [attack, setAttack] = useState(false);
  const [attackMonster, setAttackMonster] = useState(false);
  const [damage, setDamage] = useState(0);
  const [damageMonster, setDamageMonster] = useState(0);
  const [final, setFinal] = useState(false);
  const [gameover, setGameover] = useState(false);

  let monster = monsterList[monsterCount];
  let heroHP = healthHero - damageMonster;
  let monsterHP = monster.healthPoint - damage;
  let width = 120;

  function heroAttack() {
    setAttack(true);
    setDamage(damage + damageHero);
    End();
    function noAttack() {
      setAttack(false);
    }
    setTimeout(noAttack, 100);
  }

  function attackShow() {
    setAttackMonster(true);
    setTimeout(noAttack, 500);
    End();
    function noAttack() {
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
      localStorage.setItem("gold", JSON.stringify(goldHero + monster.gold));
      localStorage.setItem("exp", JSON.stringify(expHero + monster.exp));
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
          <h3 style={{ marginBottom: "5px" }}>{lvlHero} lvl</h3>
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
                width: width - damageMonster / (healthHero / width),
                height: "100%",
              }}
            >
              {heroHP}
            </div>
          </div>
          <div className={cl.heroIcon}>
            <img
              className={cl.heroImg}
              src={heroList[heroCount].img}
              alt={heroList[heroCount].name}
            />
          </div>
        </div>

        <div className={cl.monster}>
          <h3 style={{ marginBottom: "5px" }}>{monster.level} lvl</h3>
          <h3 style={{ color: "red" }}>{monster.name}</h3>
          {attack ? (
            <p style={{ color: "white", opacity: "1", marginBottom: "10" }}>
              -{damageHero}
            </p>
          ) : (
            <p style={{ opacity: "0" }}>-{heroList[heroCount].damage}</p>
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
          <img src={monster.img} alt={heroList[heroCount].name} />
        </div>
      </div>
      <div className={cl.skills} onClick={heroAttack}>
        <img
          src={heroList[heroCount].weapon}
          alt={heroList[heroCount].weapon}
        />
      </div>
      <h3>Атаковать</h3>
      {final && <FinalBattle setTrain={setTrain} />}
      {gameover && <GameOver setTrain={setTrain} />}
    </div>
  );
};

export default BattleTrain;
