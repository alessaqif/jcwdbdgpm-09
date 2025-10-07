// JOIN
const arrayOfFruits = ["apple", "banana", "grape", "watermelon"];
console.log(arrayOfFruits.join());
console.log(arrayOfFruits.join(""));
console.log(arrayOfFruits.join(" "));
console.log(arrayOfFruits.join(" and "));

//PUSH
//menambah element array menjadi string

const employeeNames = ["joko", "pinurbo", "Yamal"];
console.log(employeeNames);
console.log(employeeNames.push("brian"));
console.log(employeeNames);

//POP
//Menghapus element di akhir array

const citizens = ["dadang", "mamad", "bejo", "sutejo"];
console.log(citizens);
console.log(citizens.pop());
console.log(citizens);

// UNSHIFT
//Menambah elemet di awal
const scores = [100, 90, 80, 20];
console.log(scores);
console.log(scores.unshift(110));
console.log(scores);

//SHIFT
// DIHAPUS DI BAGIAN AWAL

const values = [50, 60, 70, 80, 90];
console.log(values);
console.log(values.shift());
console.log(values);

//SPLICE
//Memotong / mengganti isi sebuah array

const fruits = ["banana", "Apple", "avocado", "Watermelon", "Orange"];

console.log(fruits.splice(1, 3));
console.log(fruits);

//SPLICE

//Array.slice(start)

const names = ["andhika", "galih", "ratna", "soraya", "Angelina"];

console.log(names.slice(2, 5));
console.log(names);

//INDEX OF

const employees = [
  "Liam Carter",
  "Sophia Bennett",
  "Noah Reynolds",
  "Ava Mitchell",
  "Elijah Foster",
  "Isabella Hayes",
  "Mason Brooks",
  "Mia Sullivan",
  "Logan Price",
  "Harper Kelly",
  "Lucas Powell",
  "Ella Richardson",
  "Ethan Simmons",
  "Grace Turner",
  "Jacob Coleman",
  "Scarlett Rivera",
  "William Ross",
  "Luna Perry",
  "James Gray",
  "Nora Jenkins",
  "Alexander Flores",
  "Aria Patterson",
  "Sebastian Cooper",
  "Chloe Hughes",
  "Henry Morgan",
  "Zoe Ramirez",
  "Daniel Bailey",
  "Layla Gonzales",
  "Matthew Ward",
  "Riley Bryant",
  "Joseph Campbell",
  "Penelope Howard",
  "David Butler",
  "Violet Long",
  "Andrew Jenkins",
  "Hazel Cox",
  "Owen Morales",
  "Paisley Foster",
  "Samuel Griffin",
  "Ellie Harper",
  "Jack Rogers",
  "Natalie Scott",
  "Caleb Phillips",
  "Savannah Evans",
  "Isaac Wood",
  "Leah Reed",
  "Thomas Adams",
  "Aubrey Ross",
  "Nathan Stewart",
  "Lillian Hughes",
  "Ryan Kelly",
  "Aurora Torres",
  "Joshua Watson",
  "Claire Bennett",
  "Christian Green",
  "Stella Foster",
  "Eli Peterson",
  "Brooklyn Parker",
  "Anthony Myers",
  "Lucy Bryant",
  "Charles Gonzalez",
  "Addison Ramirez",
  "Lincoln Nelson",
  "Audrey Lopez",
  "Hunter Bailey",
  "Camila Cruz",
  "Julian Howard",
  "Madeline Rivera",
  "Jason Edwards",
  "Evelyn Gray",
  "Aaron Sanders",
  "Bella Long",
  "Connor Murphy",
  "Hannah Jenkins",
  "Leo Foster",
  "Naomi Cooper",
  "Dominic Price",
  "Piper Simmons",
  "Christopher Hayes",
  "Elliana Scott",
  "Adam Bryant",
  "Kinsley Wright",
  "Jeremiah Torres",
  "Ruby Brooks",
  "Easton Powell",
  "Isla Peterson",
  "Jonathan Kelly",
  "Emilia Foster",
  "Robert Bennett",
  "Delilah Stewart",
  "Miles Watson",
  "Sophie Carter",
  "Nicholas Perry",
  "Clara Richardson",
  "Asher Morgan",
  "Ivy Phillips",
  "Hudson Rivera",
  "Maya Thompson",
];

console.log(employees.indexOf("Sophie"));

//last index of

const cities = ["jakarta", "bandung", "malang", "jogja"];

console.log(cities.indexOf("jakarta"))


//sort 

const points = [10,2,5,7]
console.log( [2,5,7,10]
    points.sort ((a,b) => {
        return a - b;
    }

    )
);



// reverse 

const string = "kasur"
const stringArray = string.split("");
console.log(stringArray.reverse())

//MAP 

const ages = [19,14,15,28,23,25];
console.log(
ages.map((element, index) => {
    return element + 10;
})
);
