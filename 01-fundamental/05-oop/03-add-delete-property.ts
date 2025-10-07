interface Ipeople{
    name : string;
    age : number;
    gender? : string;
    hobby? : string;
}



const people : Ipeople = {
    name : "Ronaldo D Caprio",
    age : 82,
    gender : "Male"
}

console.log(people);

people.hobby = "football" //ADD PROPERTY

console.log(people)

delete people.gender;

console.log(people)

people.name = "Christiano Ronaldo"; //Update property 

console.log(people);