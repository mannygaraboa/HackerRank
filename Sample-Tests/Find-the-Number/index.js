function findNumber(arr, k) {
  let bool = false;
  for(let i = 0; i < arr.length; i++)
  {
    if(arr[i] == k)
    {
      console.log(arr[i] + " = " + k);
      bool = true;
    }
  }
  if(bool == true)
  {
    return "YES";
  }
  else if(bool == false)
  {
    return "NO";
  }
}
findNumber([2, 3, 1], 3)