function balikKata(kata) {

var kata;
var i;
var balik = ' ';

  for (i = kata.length - 1; i >= 0; i--) {

    balik += kata[i];
  }

return balik;
}

console.log(balikKata('Hello World!'));
