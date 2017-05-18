export function generateNumber(type,range) {
  let results = []
  for(let i = 0; i <= range; i++) {
    switch(type) {
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
generateNumber("Odd")
