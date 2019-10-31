var sum = (a: number, b: number) => {
  return a + b;
};

var answer = sum(4, 5);

console.log(answer);

//? Boolean

let isCool: boolean = true;

//? Number

let age: number = 56;

//? String
let eyeColor: string = "brown";
let favoriteQuote: string = `I'm not old, I'm only ${age}`;

//? Array
let pets: string[] = ["cat", "dog", "pig"];
let pets2: Array<string> = ["lion", "dragon", "lizard"];

//? Object
let wizard: object = {
  a : "John"
};

//null and undefined
let meh: undefined = undefined; //! Never use undefined (js uses undefined)
let noo: null;

//? Tuple (allows multiple types in one dataset)
let basket: [string, number];
basket = ["basketball", 5];

//? Enum (enumerable)
//! Capitalize for best practice
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3
}
let sizeName: string = Size[2];
let sizeName2: number = Size.Small;

console.log(sizeName);
console.log(sizeName2);

//! CAREFUL WITH THIS TYPE! (if you are refactoring js)
//? Any
let whatever: any = "no no no!";
whatever = 5;
whatever = true;
whatever = Size.Small;

console.log(whatever);

//? Void ( a function returning nothing)
let sing = (): void => {
  console.log("testing");
};

//? Never (tests 1) function never returns 2) var is never true)
let error = (): never => {
  throw Error("broken");
};

//? Interface or type (use interface until type is fully understood)
interface RobotArmy {
  count: number;
  type: string;
  magic: string;
}
//! This tests to see if robots has all of the properties on RobotArmy
let fightRobotArmy = (robots: RobotArmy) => {
  console.log("Fight!");
};
//same as this -----------------------
let fightRobotArmy2 = (robots: {
  count: number;
  type: string;
  magic: string;
}) => {
  console.log("Fight!");
};

//! Type assertion -- overrule the compiler
interface CatArmy {
  count: number;
  type: string;
  magic?: string; //! ? means this may or may not be part of the object
}

let dog = {} as CatArmy; //this is actually a CatArmy interface
dog.count;

//? Function
let fightRobotArmy3 = (robots: RobotArmy): void => {
  console.log("Fight!");
};

//adds what type will be returned

let fightRobotArmy4 = (robots: RobotArmy): number => {
  return 4;
};

//? Class
class Animal {
  private sing: string = "lala";
  constructor(sound: string) {
    this.sing = sound;
  }

  greet() {
    return `Hello ${this.sing}`;
  }
}

let lion = new Animal("Rawr");
console.log(lion.greet());

// lion.sing; //! Will NOT allow access to private variables

//? Union (allows many different types)
let confused: string | number | boolean = "hello";

let x = 4; //inference of number type

//* definatelytyped.org

//! npx create-react-app <name> --typescript
//! npm i --save typescript @types/node @types/react @types/react-dom @types/jest