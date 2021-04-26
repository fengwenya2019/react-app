import React, {useState} from 'react'
import Frame from '../frame'
import {ThemeContext, themes} from './theme-context'
import ThemedButton from './theme-button'

// 一个使用 ThemedButton 的中间组件
const Toolbar = props => {
  // eslint-disable-next-line react/prop-types
  const {changeTheme} = props
  return (
    <ThemedButton changeTheme={changeTheme} />
  )
}

const Context = () => {
  const [theme, setTheme] = useState(themes.light)

  const toggleTheme = () => {
    const t = theme === themes.dark ? themes.light : themes.dark
    setTheme(t)
  }

  return (
    <Frame>
      <ThemeContext.Provider value={theme}>
        <Toolbar changeTheme={toggleTheme} />
      </ThemeContext.Provider>
    </Frame>
        
  )
}

export default Context
