import potion from "../../img/items/potion.png";
import armour from "../../img/items/armour.png";
import crystallBall from "../../img/items/crystallball.png";
import spellbook from "../../img/items/spellbook.png";
import hat from "../../img/items/hat.png";
import skin1 from "../../img/items/skin2.png";
import skin2 from "../../img/items/skin3.png";

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
    description: "Прибавляет + 600 здоровья",
    price: 6450,
    img: armour,
    id: 1,
  },
  // {
  //   name: "Книга заклинаний",
  //   description: "Даёт одно новое умение",
  //   price: 11340,
  //   img: spellbook,
  //   id: 2,
  // },
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
  },
  {
    name: "Скин мага",
    description: "Украшение",
    price: 5000,
    img: skin1,
    id: 5,
  },
  {
    name: "Скин 2",
    description: "Украшение",
    price: 5000,
    img: skin2,
    id: 6,
  },
];
let score = JSON.parse(localStorage.getItem("score"));
  if (score === null) {
  localStorage.setItem("score", JSON.stringify(itemsAll));
}
