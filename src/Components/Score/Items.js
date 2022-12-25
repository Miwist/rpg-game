import potion from "../../img/items/potion.png";
import armour from "../../img/items/armour.png";
import crystallBall from "../../img/items/crystallball.png";
import spellbook from "../../img/items/spellbook.png";
import hat from "../../img/items/hat.png";

export let itemsAll = [
  {
    name: "Лечебное зелье",
    description: "Прибавляет +250 здоровья",
    price: 1450,
    img: potion,
    id: 0,
  },
  {
    name: "Броня",
    description: "Прибавляет + 1600 здоровья",
    price: 6450,
    img: armour,
    id: 1,
  },
  {
    name: "Книга заклинаний",
    description: "Даёт одно новое умение",
    price: 11340,
    img: spellbook,
    id: 2,
  },
  {
    name: "Магическая сфера",
    description: "увеличивает урон х2",
    price: 6850,
    img: crystallBall,
    id: 3,
  },
  {
    name: "Шапочка по скидке",
    description: "Делает вас буквально бессмертным и самым модным",
    price: 99999,
    img: hat,
    id: 4,
  }
];

localStorage.setItem("score", JSON.stringify(itemsAll));
