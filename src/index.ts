enum skills {
  FRONT_END = "React and other front end technologies",
  BACK_END = "Node and other related technologies",
}

type data = {
  name: string;
  age: number;
  status: boolean;
  skills: skills;
  [key: number]: string;
};

let data1: data = {
  name: "Taimoor khan",
  age: 21,
  status: true,
  skills: skills.FRONT_END,
  20: "hello world",
};

let a: object = {
  b: "x",
  c: "hello",
};

type employee = {
  name: string;
  NIC: string | number; // NIC can have  have a type either both string or number only
};

const e: employee = { name: "Mansoor", NIC: 4240 };

console.log(e);
