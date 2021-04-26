import React, {useReducer} from 'react'
import {Button} from 'antd'
import Frame from '../frame'

const Count = () => {
  const btnType = ['ghost', 'dashed', 'link', 'text', 'default', 'primary']
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { 
          ...state,
          count: state.count + 1, 
        }
      case 'decrement':
        return { 
          ...state,
          count: state.count - 1, 
        }
      case 'reset':
        return { 
          ...state,
          count: 0,
        }
      case 'setBtnType':
        return { 
          ...state,
          type: btnType[Math.floor(Math.random() * btnType.length)],
        }
      default:
        throw new Error()
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    type: 'primary',
  })

  return (
    <Frame>
      <div>{state.count}</div>
      <Button onClick={() => dispatch({type: 'decrement'})}>-</Button>
      <Button onClick={() => dispatch({type: 'reset'})}>重置</Button>
      <Button onClick={() => dispatch({type: 'increment'})}>+</Button>
      <hr />
      <div>
        按钮类型：
        {state.type}
      </div>
      <Button type={state.type} onClick={() => dispatch({type: 'setBtnType'})}>点击，更改按钮类型</Button>
    </Frame>
  ) 
}

export default Count
