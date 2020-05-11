import * as React from 'react'
import { withTheme, ThemeContext } from '../../theme'
import { Button, ButtonProps } from './index'

type TComponent<T> = React.ComponentType<T>
const withCustomTheme = <P extends{ }, C>(Component: TComponent<P>, custom: C): React.SFC<P>  => {
  return function(props: P) {
    const theme = React.useContext(ThemeContext)
    return ( <Component {...props} theme = {{
      ...theme,
      ...customTheme,
    }} />)
  }
}

const customTheme = {
  colors: {
    primary: 'hotpink',
  }
}

type CustomTheme = typeof customTheme

export const CustomButton = withCustomTheme<ButtonProps, CustomTheme>(Button, customTheme)
