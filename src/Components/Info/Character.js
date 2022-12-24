import magic from "../../img/magic.png";
import honor from "../../img/honor.png";
import warwomen from "../../img/woman.png";
import boar from "../../img/boar.png";
import troll from "../../img/troll.png";
import fireball from "../../img/fireball.png";
import sword from "../../img/sword.png";
import spear from "../../img/spear.png";
import dragon from "../../img/dragon.png";
import skeleton from "../../img/skeleton.png";
import Mutant from "../../img/mutant.png";
import minotaur from "../../img/minotaur.png";
import devil from "../../img/devil.png";

export let heroList = [
  {
    name: "Маг",
    img: magic,
    exp: 0,
    level: 1,
    damage: 3,
    armour: 1,
    gold: 111110,
    healthPoint: 120,
    manaPoint: 180,
    luck: 1,
    weapon: fireball,
    weaponName: "fireball",
  },
  {
    name: "Воин",
    img: honor,
    exp: 0,
    damage: 1,
    gold: 0,
    level: 1,
    armour: 3,
    healthPoint: 180,
    manaPoint: 80,
    luck: 1,
    weapon: sword,
    weaponName: "sword",
  },

  {
    name: "Воительница",
    img: warwomen,
    exp: 0,
    damage: 2,
    gold: 0,
    level: 1,
    armour: 2,
    healthPoint: 150,
    manaPoint: 60,
    luck: 1,
    weapon: spear,
    weaponName: "spear",
  },
];

export let monsterList = [
  {
    name: "Вепрь",
    img: boar,
    damage: 8,
    armour: 1,
    level: 1,
    healthPoint: 100,
    exp: 50,
    gold: 50,
  },
  {
    name: "Тролль",
    img: troll,
    damage: 25,
    armour: 3,
    level: 5,
    healthPoint: 150,
    exp: 100,
    gold: 100,
  },
  {
    name: "Скелет",
    img: skeleton,
    damage: 45,
    armour: 5,
    level: 10,
    healthPoint: 250,
    exp: 200,
    gold: 200,
  },
  {
    name: "Мутант",
    img: Mutant,
    damage: 80,
    armour: 8,
    level: 15,
    healthPoint: 450,
    exp: 300,
    gold: 300,
  },
  {
    name: "Минотавр",
    img: minotaur,
    damage: 120,
    armour: 8,
    level: 20,
    healthPoint: 650,
    exp: 400,
    gold: 400,
  },
  {
    name: "Люци",
    img: devil,
    damage: 150,
    armour: 8,
    level: 30,
    healthPoint: 750,
    exp: 600,
    gold: 600,
  },
];
export let bossList = [
  {
    name: "Дракон",
    img: dragon,
    damage: 300,
    armour: 20,
    level: 50,
    healthPoint: 2500,
    exp: 5500,
    gold: 5000,
  },
];

