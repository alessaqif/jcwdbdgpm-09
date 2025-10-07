{
function convert(cm) {
    let km = cm / 100000;
    return km ;
}

let centimeter = 100000;
let kilometer = convert(centimeter)

console.log(`${centimeter} cm = ${kilometer} km`)

}

{
    let tulisan = "hai gaes";
    let words = tulisan.split(" ");

    let hasil = words[0].charAt(0).toUpperCase() + words[0].slice(1) + " " +
              words[1].charAt(0).toUpperCase() + words[1].slice(1);

    console.log(hasil);
}

{
   
function hapusKataPertama(teks, cari) {
  return teks.replace(cari, ""); 
}


let kalimat = "Saya suka makan nasi, karena nasi enak.";
let hasil = hapusKataPertama(kalimat, "nasi");

console.log(hasil);


}

{
    function tukarHuruf(teks) {
  let hasil = "";

  for (let i = 0; i < teks.length; i++) {
    let huruf = teks[i];
    if (huruf === huruf.toUpperCase()) {
      hasil += huruf.toLowerCase();
    } else {
      hasil += huruf.toUpperCase();
    }
  }

  return hasil;
}


let kalimat = "HeLLo WoRLd";
let hasil = tukarHuruf(kalimat);

console.log(hasil); 

}

{
    let n = 5; 

for (let i = 1; i <= 10; i++) {
  console.log(n + " x " + i + " = " + (n * i));
}

}

{
    
}