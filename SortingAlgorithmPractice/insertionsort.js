const arr = [5,2,7,4,2,1,6,8,5,3];

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        for(let j=i;j>=0;j--){
            if(j === 0){
                arr.splice(0,0,arr[i]);
                arr.splice(i+1,1);
            }
            else if(arr[i]>=arr[j-1]){
                arr.splice(j,0,arr[i]);
                arr.splice(i+1,1);
                break;
            }
        }
    }
    return arr;
}

const arr2 = insertionSort(arr);
console.log(arr2);