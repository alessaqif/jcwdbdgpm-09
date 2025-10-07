//function definition - pembuatan fungsi 
function CalculateFinalPrice (
    originalPrice : number,
    discountPercentage : number
) {
    const discountPrice = originalPrice * discountPercentage;

    const finalPrice = originalPrice - discountPrice ;

    return finalPrice;

}

//execution
console.log(CalculateFinalPrice(100_000_000, 50/100));


//function declaration vs expression 

//declaration

function add(num1 : number, num2 : number){
    return num1 + num2
}

console.log(add(5,2))

//expression 
const pengurangan =function subtract(num1 : number, num2 : number){
    return  num1 - num2
}

console.log(pengurangan(5,2));

//ARROW 



