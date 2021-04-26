/* eslint-disable react/jsx-no-comment-textnodes */
import React, {useEffect, useRef, useState} from 'react'
import Frame from '../frame'

const AceEditor = () => {
  const myRef2 = useRef(0)

  const [count, setCount] = useState(0)

  useEffect(() => {
    myRef2.current = count
  })

  const handleClick = () => {
    setTimeout(() => {
      console.log(count) 
      console.log(myRef2.current) 
    }, 3000)
  }

  return (
    <Frame>
      <div onClick={() => setCount(count + 1)}>点击count</div>
      <div onClick={() => handleClick()}>查看</div>
      <div>{count}</div>
    </Frame>
  )
}

export default AceEditor
