export function generateNumber(type,rangeTop) {
  let results = []
  for(let i = 1; i <= rangeTop; i++) {
    switch(type) {

      case "Fibonacci":
          let fibonacciNumber = fibonacci(i)
          if(fibonacciNumber <= rangeTop ){
            results.push(fibonacciNumber)
          }else{
            break
          }
      case "Odd":
          if(i % 2 === 0 ){
            continue
          }else{
            results.push(i)
            continue
          }
      case "Even":
      if(i % 2 === 0 ){
        results.push(i)
        continue
      }else{
        continue
      }
      case "All":
          results.push(i)
          continue
      case "Prime":
      if(i < 2){
        continue
      }
      let prime = true
      for(let x = 2; x < i; x++) {
        if(i % x === 0) {
          prime = false
        }
      }
      if(prime === true) {
        results.push(i)
      }
      continue
    }
}
return results
}

function fibonacci(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

function removeFromArray(array,removeArray){
  for(let i = 0; i < removeArray.length; i++ ){
    array.shift(removeArray[i])
  }
  return array
}

export function arrayIntersection(array1Original,array2Original) {
  // Create copies of the passed arrays, so as to not affect the originals
  let array1 = array1Original.slice()
  let array2 = array2Original.slice()
  let intersection = []
  let removeArray1 = []
  let removeArray2 = []
  for(let i= array1.length - 1; i >= 0; i--){
    let number = array1[i]
    if (array2.indexOf(number) !== -1) {
      removeArray1.push(array1.indexOf(number))
      removeArray2.push(array2.indexOf(number))
      intersection.push(number)
    }
  }
  let aMinusB = removeFromArray(array1.reverse(),removeArray1).reverse()
  let bMinuesA = removeFromArray(array2,removeArray2)
  return [aMinusB,bMinuesA,intersection.reverse()]
}

generateNumber("Odd")
