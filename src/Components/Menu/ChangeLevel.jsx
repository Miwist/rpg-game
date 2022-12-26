import React from "react";
import cl from "./Menu.module.scss";

const ChangeLevel = ({ setTrain, setChange }) => {

  function level1() {
    localStorage.setItem("monsterCount", 0);
    start();
  }

  function level5() {
    localStorage.setItem("monsterCount", 1);
    start();
  }

  function level10() {
    localStorage.setItem("monsterCount", 2);
    start();
  }

  function level15() {
    localStorage.setItem("monsterCount", 3);
    start();
  }

  function level20() {
    localStorage.setItem("monsterCount", 4);
    start();
  }

  function level30() {
    localStorage.setItem("monsterCount", 5);
    start();
  }
  function level35() {
    localStorage.setItem("monsterCount", 6);
    start();
  }
  function level40() {
    localStorage.setItem("monsterCount", 7);
    start();
  }
  function level45() {
    localStorage.setItem("monsterCount", 8);
    start();
  }

  function start() {
    setTrain(true);
    setChange(false);
  }

  return (
    <div className={cl.changeLevel}>
      <h3>Выберите уровень</h3>
      <span onClick={level1}>1 уровень</span>
      <span onClick={level5}>5 уровень</span>
      <span onClick={level10}>10 уровень</span>
      <span onClick={level15}>15 уровень</span>
      <span onClick={level20}>20 уровень</span>
      <span onClick={level30}>30 уровень</span>
      <span onClick={level35}>35 уровень</span>
      <span onClick={level40}>40 уровень</span>
      <span onClick={level45}>45 уровень</span>
      <span onClick={() => setChange(false)}>Назад</span>
    </div>
  );
};

export default ChangeLevel;
