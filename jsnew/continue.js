for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // Skip the rest of the loop body for i = 5
  }
  console.log(i);
}

// Example of continue in a nested loop
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      continue; // Skip the rest of the inner loop body for j = 1
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}
