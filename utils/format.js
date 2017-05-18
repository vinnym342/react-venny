import React from 'react'
export function formatIntoList(array) {
  let result = []
  for(let i = 0; i < array.length; i++){
    result.push(<li>{ array[i] }</li>)
  }
  return result
}
