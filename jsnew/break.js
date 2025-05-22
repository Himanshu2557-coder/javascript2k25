let i = 0;
while (i < 10) {
  if (i === 5) {
    break;
  }
  console.log(i);
  i++;
}
for (let j = 0; j < 5; j++) {
    if (j === 2) {
      break;
    }
    console.log("Inner loop: " + j);
  }


for (let k = 0; k < 3; k++) {
  for (let l = 0; l < 3; l++) {
    if (l === 1) {
      break;
    }
    console.log(`Outer: ${k}, Inner: ${l}`);
  }
}
