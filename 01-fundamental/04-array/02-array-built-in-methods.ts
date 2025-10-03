// JOIN
const arrayOfFruits = ["apple", "banana", "grape", "watermelon"]
console.log(arrayOfFruits.join())
console.log(arrayOfFruits.join(""))
console.log(arrayOfFruits.join(" "))
console.log(arrayOfFruits.join(" and "))

//PUSH
//menambah element array menjadi string 

const employeeNames = ["joko", "pinurbo", "Yamal"]
console.log(employeeNames);
console.log(employeeNames.push("brian"))
console.log(employeeNames)

//POP
//Menghapus element di akhir array 

const citizens = ["dadang", "mamad", "bejo", "sutejo"]
console.log(citizens);
console.log(citizens.pop())
console.log(citizens)

// UNSHIFT 
//Menambah elemet di awal 
const scores =[100,90,80,20]
console.log(scores)
console.log(scores.unshift(110))
console.log(scores)

//SHIFT 
// DIHAPUS DI BAGIAN AWAL

const values =[50,60,70,80,90]
console.log(values);
console.log(values.shift());
console.log(values)