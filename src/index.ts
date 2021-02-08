// enum skills {
//   FRONT_END = "React and other front end technologies",
//   BACK_END = "Node and other related technologies",
// }

// type data = {
//   name: string;
//   age: number;
//   status: boolean;
//   skills: skills;
//   [key: number]: string;
// };

// let data1: data = {
//   name: "Taimoor khan",
//   age: 21,
//   status: true,
//   skills: skills.FRONT_END,
//   20: "hello world",
// };

// let a: object = {
//   b: "x",
//   c: "hello",
// };

// // Making dynamic object with strict type
// type employee = {
//   name: string;
//   NIC: string | number; // NIC can have  have a type either both string or number only
// };

// const e: employee = { name: "Mansoor", NIC: 4240 };

// Union and intersection

type superHuman = {
  name: string;
  specialPower: string | boolean;
  canFly: boolean;
  human: boolean;
  same: string;
};

type human = {
  name: string;
  canWalk: boolean;
  education: string;
  skills: string[];
  same: string;
};

type superHumanOrHumanOrBoth = superHuman | human;

type similarities = superHuman & human;

const person1: superHumanOrHumanOrBoth = {
  name: "taimoor khan",
  canFly: false,
  canWalk: true,
  education: "Bachelors",
  skills: ["Computer", "programming", "Designing"],
  human: true,
  specialPower: false,
};

const humanOrHero: similarities = {
  name: "mansoor",
  canFly: false,
  canWalk: false,
  specialPower: "taimoor",
  human: true,
  same: "hello",
};

console.log(typeof person1);
