// Temel Javascript
console.log("Hi! Kodlama.io");

// Değişken Tanımlama:

/*var dolarDun = 9.20
var dolarBugun = 9.30*/


// JS tip güvenli değildir !
// Değişkenlerde değerler tip güvenli değildir. Değişken değeri sayısal değerken
// string bir değer de alabilir. 
// Değişken tanımlamadan loglanırsa değer undefined olarak geri döner.
/*
    var dolarDun;
    console.log(dolarDun); returns undefined.
*/

// Değişkenler tanımlandığı blokta yani scopeta geçerlidir.
// var anahtar kelimesiyle globalde tanımladığımız bir değer olduğunda yeni bir 
// scopeta aynı değerin en son hali görünür. Globaldeki görünmez. Bu yüzden var
// anahtar kelimesi kullanılmaz. let ve const kullanılır.

let dolarBugun = 9.30
let dolarDun = 9.20
console.log(dolarDun);

// Arrays -> Birden fazla veri tutabiliriz. 

let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"]
console.log("<ul>");
for(let i = 0; i< konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>");
}
console.log("</ul>");