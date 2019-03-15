function fpb(angka1, angka2) {
  var arr1 = [];
  var arr2 = [];

  for (var i = 1; i <= angka1; i++) {
    if (angka1 % i === 0) {
      arr1.push(i);
    }
  }
  for (var j = 1; j <= angka2; j++) {
    if (angka2 % j === 0) {
      arr2.push(j);
    }
  }
  var simpan=0;
  for (var a = 0; a < arr1.length; a++) {
    for (var b = 0; b < arr2.length; b++)
    if (arr1[a] == arr2[b]) {
      simpan = arr1[a]
    }
  }
return simpan;
}

//TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
