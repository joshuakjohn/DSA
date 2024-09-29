function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid; 
      }
  
      if (arr[mid] < target) {
        left = mid + 1; 
      } else {
        right = mid - 1; 
      }
    }
  
    return -1;  
  }
  
  let arr = [5, 10, 15, 20, 25, 30, 35, 40];
  let target = 25;
  
  let result = binarySearch(arr, target);
  if (result !== -1) {
    console.log(`Element found at index ${result}`);
  } else {
    console.log("Element not found");
  }
  