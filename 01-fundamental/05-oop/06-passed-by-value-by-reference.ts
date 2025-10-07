//PASSED BY VALUE

let address1 = "Jalan Iskandar Muda"
let address2 = address1;

console.log(address1);
console.log(address2);

address2 = "Jalan Setiabudi";

console.log(address1);
console.log(address2);

//passed by reference 

let people1 = {name : "Jonh Aless", age : 40}
let people2 = people1

console.log(people1)
console.log(people2)

people2 = "the rock";