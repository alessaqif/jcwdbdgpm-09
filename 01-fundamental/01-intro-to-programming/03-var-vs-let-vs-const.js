// var dan let
var fullname = "alessaqif";
console.log(fullname);
let city = "bandung";
city= "jakarta";
city = "malang";
console.log("city")
//const 
const score = 100;
console.log(score);

// var vs let , const


let age = 20;
console.log(age);

{
    //scope level 1
    console.log(age)
    let gender = "male";
    console.log(gender)
    {
        //scope level 2
        console.log(age)
        console.log(gender)

        let email = "alessaqif@gmail.com";
        console.log (email)

        var address = "jalan asia afrika"
        console.log (address)
    }
}
console.log (address)