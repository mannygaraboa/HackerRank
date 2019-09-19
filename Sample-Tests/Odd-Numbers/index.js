function oddNumbers(l, r) {
  let arr = [];
  for(let i = l; i <= r; i++)
  {
    if(i % 2 != 0)
    {
      arr.push(i);
    }
  }
  return arr;
}
oddNumbers(3, 9);