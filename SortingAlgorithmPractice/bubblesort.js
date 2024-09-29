const arr = [5,2,7,4,2,1,6,8,5,3];

function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]=temp;
            }
        }
        
    }
    return arr;
}

const arr2 = bubbleSort(arr);
console.log(arr2);