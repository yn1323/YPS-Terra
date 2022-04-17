import React from 'react'

export const replaceToBrTag = (str: string) => {
  const strArray = str.split('\n')
  const retArray: (string | JSX.Element)[] = []
  strArray.forEach((text, i) => {
    retArray.push(text)
    if (strArray[i + 1]) {
      retArray.push(<br key={i + 1} />)
    }
  })
  return retArray
}
