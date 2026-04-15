function xisobla(end) {
  let ty = 0;
  let jy = 0;
  for (let i = 1; i <= end; i++) {
    if (i % 2 === 0) jy += i;
    else ty += i;
  }
  console.log(jy - ty);
}
xisobla(30);
xisobla(20);
xisobla(10);