import * as React from 'react'

type TComponent<T> = React.ComponentType<T>
interface TProvider {
  children: React.ReactNode
}

interface TConsumer {
  children: (value: any) => typeof value
}


export default <T extends{}>(theme: T) => {

  type TStyle = (theme: T) => T

  const ThemeContext = React.createContext<T>(theme) 

  const withTheme = <P extends{ }>(Component: TComponent<P & {theme: T}>) : React.SFC<P>  => {
    return function(props: React.PropsWithChildren<P & any>) {
      return (
        <ThemeContext.Consumer>
          { (value: T) => {
            const theme = props.theme != null ? props.theme : value
            return <Component {...props} theme={theme} />
          }}
        </ThemeContext.Consumer>
      )
    }
  }

  const updateTheme = <P extends {}>(Base: TComponent<P>, styler: TStyle): React.SFC<P> => {
  return function(props: any) {
      const ComponentToStyle = (props: P & {theme: T}) => {
        const style = styler(props.theme)
        return <Base {...props} theme={style} />
      }
      return (
        <ThemeContext.Consumer>
          { (value) => <ComponentToStyle {...props} theme={value} />}
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
    updateTheme,
    ThemeProvider,
    ThemeConsumer,
    ThemeContext,
  }   
    
}
