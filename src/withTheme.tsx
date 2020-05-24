import * as React from 'react'

type TComponent<T> = React.ComponentType<T>
type TElement<T> = React.ReactElement<any>
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

  const updateTheme = <P extends {}>(Base: TComponent<P>, themer: TStyle): React.SFC<P> => {
  return function(props: any) {
      const ComponentToStyle = (props: P & {theme: T}) => {
        const updatedTheme = themer(props.theme)
        return <Base {...props} theme={updatedTheme} />
      }
      return (
        <ThemeContext.Consumer>
          { (value) => <ComponentToStyle {...props} theme={value} />}
        </ThemeContext.Consumer>
      )
  }

}

  /*const withStyle = (Base: TElement<any>, styler: TStyle): React.ReactElement<T> => {
        const style = styler(props.theme)
        return React.cloneElement(Base, {style})
       
  }*/

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
