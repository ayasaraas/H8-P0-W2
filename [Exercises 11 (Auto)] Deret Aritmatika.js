function tentukanDeretAritmatika(arr) {
  var aritmatika = true;
  var x = 1;
  var selisih = (arr[arr.length-1] - arr[arr.length-2]);

  while (aritmatika = true) {
for (i= 0; i = arr.length-1; i++) {
  var deret = (arr[arr.length-i] - arr[arr.length-i-1]);

  if (deret != selisih) {
    aritmatika = false;
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
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
