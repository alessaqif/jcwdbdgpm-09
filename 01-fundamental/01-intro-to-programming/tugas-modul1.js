// SOAL 1

const retangleLength = 5
const retangleWidth = 3

const retangleArea = retangleLength * retangleWidth

console.log (retangleArea)

// SOAL 2
const length = 5
const width = 3

function hitungPerimeter(length,width){
    return 2 * (length + width);
}
const perimeter = hitungPerimeter(length,width) ;

console.log(perimeter)

// SOAL 4
function AngleKetiga(angle1, angle2) {
  
  const angle3 = 180 - (angle1 + angle2);

  if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
    return "Invalid angles. The sum must be less than 180 and each angle must be greater than 0.";
  }

  return angle3;
}

const angleSatu = 65;
const angleDua = 80;

const thirdAngle = AngleKetiga(angleSatu, angleDua);
console.log(`Given angles: ${angleSatu}° and ${angleDua}°`);
console.log(`The third angle is: ${thirdAngle}°`);


// SOAL 5

function convertHari (totalHari) {
    const years = Math.floor(totalHari / 365);
    const remainingAfteryears = totalHari % 365;

    const months = Math.floor(remainingAfteryears / 30);
    const days = remainingAfteryears % 30;

    return {
        years : years,
        months : months,
        days: days
    };
}

const jumlahHari = 700;
const result = convertHari(jumlahHari);


console.log (`${jumlahHari}`)
console.log (`${result.years} Years, ${result.months} Month, ${result.days} days`)

// SOAL 6 

function totalSelisihHari (tanggal1, tanggal2) {
    const date1 = new Date(tanggal1);
    const date2 = new Date(tanggal2);

    const selisihMs = Math.abs  (date2 - date1 );

    const selisihHari = Math.floor(selisihMs / (1000 * 60 * 60 * 24));

    return selisihHari;
}

const tanggalPertama = "2023-05-04"
const tanggalKedua = "2025-05-06"

const hasilselisih = totalSelisihHari(tanggalPertama, tanggalKedua);

console.log (`selisih dari tanggal ${tanggalPertama} dan ${tanggalKedua} adalah ${hasilselisih} hari`)

