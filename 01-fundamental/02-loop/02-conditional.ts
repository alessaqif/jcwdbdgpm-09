//IF ELSE

//console.log("secret message")


let password = "password1234"


if (password === "password1234") {
    console.log("secret message")
} 
else if (password === "regulersecret") {
    console.log("reguler")

}

else {console.log("public message")

}

let gaji = 6000;
gaji >10000 ? console.log("rich") : console.log("poor")


//SWITCH CASE 

let pass ="regulersecret"

switch(pass) {
    case "password1234":
    console.log("super secret")
    break;
    case "regulersecret":
    console.log("reguler secret")
    break;
    default:
    console.log("pesan biiasa")
}
