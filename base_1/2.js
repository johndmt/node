const person = {
  name: "john",
  age: 45,
  greet() {
    console.log(this.name);
  },
};

person.greet();

// const hobbies = ["chess", "capoeira", "juggling"];

// for (let hobby of hobbies) {
//   console.log(hobby);
// }

// const nameHobbies = hobbies.map((hobby) => "hobby: " + hobby);
// const newHobbies = hobbies.slice();

// const newHobbies = [...hobbies];
// console.log(hobbies, newHobbies);

// const toArray = (...args) => {
//   return args;
// };

// console.log(toArray(2, 5, 34, "sdf"));

// const printName = ({ name }) => {
//   console.log(name);
// };

const { name, age } = person;

// printName(person);

console.log(name, age,);

