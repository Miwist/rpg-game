import React from "react";
import cl from "./Infohero.module.scss";

const AboutGame = ({ setAbout }) => {
  return (
    <div className={cl.aboutModal}>
      <h3>Об игре</h3>
      <div className={cl.text}>
        <p>
          Вы попали в опасное средневековье, здесь есть магия, драконы, много
          разных опасностей.
          <br />
          Вам предстоит набраться смелости и сил, чтобы одолеть всех врагов.
          <br />
          Побеждайте простых монстров и бросайте вызов Боссам. <br />
          С каждой победой вы становитесь сильнее.
          <br />
          Не забывайте тратить золото на необходимые вам вещи
        </p>
      </div>
      <button type="button" onClick={() => setAbout(false)}>Закрыть</button>
    </div>
  );
};

export default AboutGame;
