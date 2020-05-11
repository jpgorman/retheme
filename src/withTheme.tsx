import * as React from 'react'

type TComponent<T> = React.ComponentType<T>
interface TProvider {
  children: React.ReactNode
}

interface TConsumer {
  children: (value: any) => typeof value
}


export default <T extends{}>(theme: T) => {
   const ThemeContext = React.createContext<T>(theme) 

  const withTheme = <P extends{ }>(Component: TComponent<P & {theme: T}>) : React.SFC<P>  => {
    return function(props: React.PropsWithChildren<P>) {
      return (
        <ThemeContext.Consumer>
          { (value: T) => <Component {...props} theme={value} />}
        </ThemeContext.Consumer>
      )
    }
  }

  const ThemeProvider = ({children}: TProvider) => (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )

  const ThemeConsumer = ({children}: TConsumer) => (
    <ThemeContext.Consumer>
      {children}
    </ThemeContext.Consumer>
  )

  return {
    withTheme,
    ThemeProvider,
    ThemeConsumer,
    ThemeContext,
  }   
    
}
