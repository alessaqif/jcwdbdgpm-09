{
    //SOAL 1

  let number =  ("4");

  number = parseInt(number);

  if (number % 2 == 0){
    console.log(number + " angka genap")

  }else{
    console.log(number +" angka ganjil")
  }
}
{
  //SOAL 2 
  let angka = ("7");
  angka =parseInt(angka);

  let angkaPrima = true;

  if (angka <= 1){

    angkaPrima = false;
  } else{
    for (let i = 2; i <= Math.sqrt(angka); i++){
      if (angka % i === 0) {
        angkaPrima = false;
        break;
      }
    }
  }
  if (angkaPrima) {
    console.log(angka + " adalah bilangan prima");
  }else {
    console.log(angka + " bukan bilangan prima");
  }
}
{
  //SOAL 3
  let number = ("5");
  number = parseInt(number);

  let jumlah = 0
  let reaksi = "";

  for (let i = 1; i <=number; i++){
    jumlah += i
    if (i == number){

      reaksi += i;
    } else {
      reaksi += i + "+";
    }
      

  } 

  console.log (number + "=" + reaksi + "=" +jumlah)
}

{
  //SOAL 4
  let number = ("4");
  number = parseInt(number);

  let jumlah = 1;
  let reaksi = "";

  for (let i = number; i >=1; i--) {
    jumlah *=i;
    if (i == 1) {
      reaksi += i;
    }else{
      reaksi += i + " x ";
    }
  }
  console.log (number + "! = " + reaksi + " = " + jumlah)
}
{
  // SOAL 5
  
}