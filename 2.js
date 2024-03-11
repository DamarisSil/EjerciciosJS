  function doubleArrayValues(numbers) {
    let doubledArray = numbers.map(function(number) {
      return number * 2;
    });
    console.log(doubledArray);
  }
  
  let exampleArray1 = [1, 2, 4, 5];
  doubleArrayValues(exampleArray1);
  