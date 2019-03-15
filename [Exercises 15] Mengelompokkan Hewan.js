function groupAnimals(arr) {
  
  for (var i = arr.length-1; i >= 0; i--) {
  var simpan = '';
  for (var now = 0; now <= i; now++) {
    var next=now + 1;
    if (arr[now] > arr[next]) {
      simpan = arr[next];
      arr[next] = arr[now];
      arr[now] = simpan;
      simpan = '';
    }
  }
  }

  var tampung = [];
  var hasil = [];
  tampung.push(arr[0]);

  for (var i = 0; i < arr.length-1; i++) {
    if (arr[i][0] === arr[i+1][0]) {
      tampung.push(arr[i+1]);   
    }
    else { 
      hasil.push(tampung);
      tampung = [];
      tampung.push(arr[i+1]);
    }
    if (i === arr.length-2) {
      hasil.push(tampung);
    }
  }

  for ( var i = 0; i<hasil.length; i++) {
    var a = [];
    for (var j = hasil[i].length-1; j >= 0; j--) {
      a.push(hasil[i][j]);
    }
    hasil[i] = a;
  }
return hasil; 
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
