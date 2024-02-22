import { paros_e } from "./fuggveny.js";

//console.log(paros_e(5));

/*var szam = 12;

console.log(szam);

function fgv1() {
  var szam = 24;
  var szam2 = 34;
  console.log(szam);
  console.log(szam2);
}

fgv1();
console.log(szam);

// varral deklaralt valtozo hatokore lehet globalis v fajlszintu, globalis v fgvszintu lokalis. Var valtozonal is mukodik a hoistring vagyis deklarkor ugy mukodik mintha a hatokor elejen hoztuk vna letre ha deklaraciokor nem adunk erteket, automatikusan undefined erteku lesz, nem hibauzenet hanem ertek. Nem akad meg a program, lokalis valtoozo az fgvn kivul n.e. a lokalis koru valtozot globalisan nem forditva elerjuk

let szam3 = 12;

function fgv2() {
  let szam4 = 5;
  console.log(szam4);
  szam4 = 56;
  console.log(szam4);
}
fgv2();
console.log(szam3);
//console.log(szam4);
//lettel deklaralt valtozo hatokore globalis, lokalis de blokkszintu. {blokk}

for (var index = 0; index < 3; index++) {
  console.log(index);
}

console.log(index);

const nev =
  "Bela"; /*const-al deklarált változó értéke később nem változtatható meg, deklaráláskor kötelező az értékadás. Blokkszintű lokális hatóköre van.*/
/*nev = "Jenő";*/

/*lista*/

/*minden elemnek van egy indexe amivel hivatkozhatunk rá, összetett adatszerkezet*/
/*let lista = ["első", "második", "harmadik"];
lista[10] = ["tizenegyedik"];
console.log(lista[5]);
lista.push("következő elem"); /*az utolsó elem után beteszi az elemet*/

/*const lista2 = ["23", "24", "25"];*/
/*konstans lista esetén a lista memóriában elfoglalt helye fix, a cime nem valtoztatható, de az értékei megváltoztathatóak, hozzá fuzhetunk ujabb elemeke, vagy eltávolíthatunk belőle, akár minden elemet is.*/

/*név, cím*/
const SZEMELY1 = {
  nev: "Gabi",
  telefon: "111",
  kor: 28,
};

console.log(SZEMELY1.nev);
SZEMELY1.barat = true;

/*javascript objektum egy olyan összetett adatszerkezet, ami összetartozó adatokat kezel egybentaljdonsag ertekparokbol all a kulcsok jelentik az adott obj tuljait, az értékek pedig azoknak értékeit. {}-be irjuk*/

const SZEMELY2 = {
  nev: "Greta",
  telefon: "222",
  kor: 25,
  barat: false,
};
