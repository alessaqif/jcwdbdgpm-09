// Break 
// hard stop loop
{
let counter =0;
while (counter < 5) {
   

    if (counter === 3){
        counter++;
        break;
    }

    console.log(counter);
    counter++;
}

}

// continue

// soft stop loop / skip loop 
{
let newCounter = 0;

while (newCounter < 10) {
    if (newCounter === 3){
        newCounter++
        continue;

    }
    
   console.log(newCounter);
   newCounter++;
}



}