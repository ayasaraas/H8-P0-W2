function tentukanDeretGeometri(arr) {
  var geometri = true;
  var x = 1;
  var selisih = (arr[arr.length-1] / arr[arr.length-2]);

  while (geometri = true) {
for (i= 0; i = arr.length-1; i++) {
  var deret = (arr[arr.length-i] / arr[arr.length-i-1]);

  if (deret != selisih) {
    geometri = false;
    return false;
  }
  x = x+1; 
  if (x == arr.length-1) {
    return true;
  }
}


  }

}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
