import React from 'react'

export const themes = {
  light: 'default',
  dark: 'primary',
}

export const ThemeContext = React.createContext(
  themes.dark // 默认值
)
