import React from 'react'
export function formatIntoList(array, Component) {
  let result = []
  for(let i = 0; i < array.length; i++){
    result.push(<Component>{ array[i] }</Component>)
  }
  return result
}
