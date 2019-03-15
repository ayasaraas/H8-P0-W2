function targetTerdekat(arr) {

  var arrX = [];
  var arrO = [];

//untuk mengecek ada 'x' apa engga
  if (arr.indexOf("x") === -1 ) {
    return 0
  }
  else { //untuk mengecek 'x' dan 'o' ada di index ke berapa aja
    for (var i = 0; i<arr.length; i++) {
      if (arr[i] === 'x') {
        arrX.push(i)
      }
      else {
        if (arr[i] === 'o') { arrO.push(i)
        }
      }
    }
  }

  var j = 0
  var b = 0
  var c = 0
  var PembandingUtama = 0;
  var a = Math.abs((arrX[j]) - (arrO[j])); //selisih awal

  //untuk mengecek jarak terdekat (dibandingkan dengan selisih awal)  
  for (var b= 0; b<arr.length; b++) { for (var c=0; c<arr.length; c++) {
    PembandingUtama = Math.abs((arrX[b]) - (arrO[c]));
    if (PembandingUtama < a) {
      a = PembandingUtama
    }
    }
    if (arr.length === 0) {
    return 0
    }
  
  }
return a; 
}

  
//TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2


