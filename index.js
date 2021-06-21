const rotateLeft = (n, d) => {
  // parameter n is size of array and d is amount to rotate by
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  const leftSlice = arr.slice(0, d);
  const rightSlice = arr.slice(d, n);
  const leftRotation = rightSlice.concat(leftSlice);
  return leftRotation;
};
rotateLeft(5, 2);
