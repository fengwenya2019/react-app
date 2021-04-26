import React, {useContext} from 'react'
import {Button} from 'antd'
import {ThemeContext} from './theme-context'
 
const ThemedButton = props => {
  // eslint-disable-next-line react/prop-types
  const {changeTheme} = props
  const context = useContext(ThemeContext)
  return (
    <Button type={context} onClick={() => changeTheme()}>button</Button>
  )
}

export default ThemedButton
