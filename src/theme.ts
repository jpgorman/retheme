import createTheme from './withTheme'

export const theme = {
  colors: {
    primary: 'red',
    secondary: 'white'
  }
}

export type Theme = typeof theme

export const {
  withTheme, 
  updateTheme,
  ThemeProvider, 
  ThemeConsumer,
  ThemeContext,
}  = createTheme<Theme>(theme)
