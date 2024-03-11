function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
  
    do {
      swapped = false;
  
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;

          swapped = true;
        }
      }
  
      n--;
    } while (swapped);
  
    return arr;
  }
  
  let inputArray = [3, 6, 12, 5, 100, 1];
  let sortedArray = bubbleSort(inputArray);
  console.log(sortedArray);
