import createTheme from './withTheme'

export const theme = {
  colors: {
    primary: 'red',
    secondary: 'blue'
  }
}

export type Theme = typeof theme

export const {
  withTheme, 
  ThemeProvider, 
  ThemeConsumer,
  ThemeContext,
}  = createTheme<Theme>(theme)
