const arr = [5,2,7,4,2,1,6,8,5,3];

function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let biggestindex = i;
        for(let j=i+1;j<arr.length;j++){ 
                if(arr[j]>arr[biggestindex])
                    biggestindex = j; 
        }
        let biggest = arr[biggestindex];
        arr.splice(biggestindex,1);
        arr.unshift(biggest);
    }
    return arr
}

const arr2 = selectionSort(arr);
console.log(arr2);