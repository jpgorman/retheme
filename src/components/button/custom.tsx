import * as React from 'react'
import { updateTheme } from '../../theme'
import { Button, ButtonProps } from './index'

type TComponent<T> = React.ComponentType<T>


export const CustomButton = updateTheme<ButtonProps>(Button, (theme) => {
  const {colors, ...rest} = theme
 
  const style = {
    ...rest,
    colors: {
      ...colors,
      primary: 'hotpink',
      secondary: 'black'
    }
  }
  return style

})
