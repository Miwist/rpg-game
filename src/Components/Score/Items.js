import potion from "../../img/items/potion.png";
import armour from "../../img/items/armour.png";
import crystallBall from "../../img/items/crystallball.png";
import spellbook from "../../img/items/spellbook.png";
import hat from "../../img/items/hat.png";
import skin1 from "../../img/items/skin2.png";
import skin2 from "../../img/items/skin3.png";
import skin3 from "../../img/items/roman.png";
import complect from "../../img/items/complect.png";
import crown from "../../img/items/crown.png";

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
  {
    name: "Книга заклинаний",
    description: "Даёт одно новое умение",
    price: 51340,
    img: spellbook,
    id: 2,
  },
  {
    name: "Магическая сфера",
    description: "увеличивает урон +20",
    price: 6850,
    img: crystallBall,
    id: 3,
  },
  {
    name: "Шапочка по скидке",
    description: "Делает вас самым модным",
    price: 99999,
    img: hat,
    id: 4,
  },
  {
    name: "Одеяния феи",
    description: "Украшение",
    price: 5000,
    img: skin1,
    id: 5,
  },
  {
    name: "Одеяния мага",
    description: "Украшение",
    price: 5000,
    img: skin2,
    id: 6,
  },
  {
    name: "Латы рыцаря",
    description: "Украшение",
    price: 5000,
    img: skin3,
    id: 7,
  },
  {
    name: "Комплект оружия",
    description: "урон 500 и 5000 здоровья",
    price: 100000,
    img: complect,
    id: 8,
  },
  {
    name: "Корона",
    description: "урон 1000 и 15000 здоровья",
    price: 1000000,
    img: crown,
    id: 9,
  },
];
let score = JSON.parse(localStorage.getItem("score"));
if (score === null) {
  localStorage.setItem("score", JSON.stringify(itemsAll));
}
