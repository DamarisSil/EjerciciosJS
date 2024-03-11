let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log(people);

people = people.filter(person => person !== "Dani");
people = people.filter(person => person !== "Juan");
people.unshift(people.splice(people.indexOf("Luis"), 1)[0]);
people.push("YourName");

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Maria") {
    break;
  }
}

let mariaIndex = people.indexOf("Maria");
console.log("Index of Maria: " + mariaIndex);