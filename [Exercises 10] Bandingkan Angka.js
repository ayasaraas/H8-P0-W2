function bandingkanAngka(angka1, angka2) {
  if (angka2 > angka1) {
    return true;
  }
  else if (angka2 < angka1) {
    return false
  }
  else {
    return '-1'
  }
  return
}

console.log(bandingkanAngka(4, 2));
