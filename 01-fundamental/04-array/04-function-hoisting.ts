function pass(num: number, pass: number) {
  const result = num ** pass;
  return result;
}
console.log(pass(4, 4));

const divideby2 = function (num: number) {
  const result = num / 2;
  return result;
};

console.log(divideby2(10));
console.log(divideby2(8));


//notes

function SayHello(){
    return "Hello";
}

console.log(SayHello())

function sayHi(name : string){
    return "Hi" + " " + name
}




console.log(sayHi("ale"))