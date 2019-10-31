var sum = function (a, b) {
    return a + b;
};
var answer = sum(4, 5);
console.log(answer);
//? Boolean
var isCool = true;
//? Number
var age = 56;
//? String
var eyeColor = "brown";
var favoriteQuote = "I'm not old, I'm only " + age;
//? Array
var pets = ["cat", "dog", "pig"];
var pets2 = ["lion", "dragon", "lizard"];
//? Object
var wizard = {
    a: "John"
};
//null and undefined
var meh = undefined; //! Never use undefined (js uses undefined)
var noo;
//? Tuple (allows multiple types in one dataset)
var basket;
basket = ["basketball", 5];
//? Enum (enumerable)
//! Capitalize for best practice
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
var sizeName2 = Size.Small;
console.log(sizeName);
console.log(sizeName2);
//! CAREFUL WITH THIS TYPE! (if you are refactoring js)
//? Any
var whatever = "no no no!";
whatever = 5;
whatever = true;
whatever = Size.Small;
console.log(whatever);
//? Void ( a function returning nothing)
var sing = function () {
    console.log("testing");
};
//? Never (tests 1) function never returns 2) var is never true)
var error = function () {
    throw Error("broken");
};
//! This tests to see if robots has all of the properties on RobotArmy
var fightRobotArmy = function (robots) {
    console.log("Fight!");
};
//same as this -----------------------
var fightRobotArmy2 = function (robots) {
    console.log("Fight!");
};
var dog = {}; //this is actually a CatArmy interface
dog.count;
//? Function
var fightRobotArmy3 = function (robots) {
    console.log("Fight!");
};
//adds what type will be returned
var fightRobotArmy4 = function (robots) {
    return 4;
};
//? Class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = "lala";
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal("Rawr");
console.log(lion.greet());
// lion.sing; //! Will NOT allow access to private variables
//? Union (allows many different types)
var confused = "hello";
var x = 4; //inference of number type
//* definatelytyped.org
//! npx create-react-app <name> --typescript
//! npm i --save typescript @types/node @types/react @types/react-dom @types/jest
