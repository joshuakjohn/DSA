function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  }
  
  let arr = [10, 20, 30, 40, 50];
  let target = 30;
  
  let result = linearSearch(arr, target);
  if (result !== -1) {
    console.log(`Element found at index ${result}`);
  } else {
    console.log("Element not found");
  }
  