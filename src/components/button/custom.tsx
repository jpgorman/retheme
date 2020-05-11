import * as React from 'react'
import { updateTheme } from '../../theme'
import { Button, ButtonProps } from './index'

type TComponent<T> = React.ComponentType<T>


export const CustomButton = updateTheme<ButtonProps>(Button, (theme) => {
  const style = {
    colors: {
      ...theme.colors,
      primary: 'hotpink',
      secondary: 'black'
    }
  }
  return style

})
