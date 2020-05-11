import * as React from 'react'

type TComponent<T> = React.ComponentType<T>
interface TProvider {
  children: React.ReactNode
}


export default <T extends{}>(theme: T) => {
   const Theme = React.createContext<T>(theme) 

  const withTheme = <P extends{ }>(Component: TComponent<P & {theme: T}>) : React.SFC<P>  => {
    return function(props: React.PropsWithChildren<P>) {
      return (
        <Theme.Consumer>
          { (value: T) => <Component {...props} theme={value} />}
        </Theme.Consumer>
      )
    }
  }

  const ThemeProvider = ({children}: TProvider) => (
    <Theme.Provider value={theme}>
      {children}
    </Theme.Provider>
  )

  return {
    withTheme,
    ThemeProvider,
  }   
    
}
