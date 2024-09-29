const arr = [5,2,7,4,2,1,6,8,5,3];

function quicksort(arr) {
    if (arr.length <= 1) {
      return arr; 
    }
  
    const pivot = arr[0];
  
    const left = [];
    const right = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quicksort(left), pivot, ...quicksort(right)];
  }
  
  let sortedArray = quicksort(arr);
  console.log(sortedArray);