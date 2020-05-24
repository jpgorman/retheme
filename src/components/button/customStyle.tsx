import * as React from 'react'
import { withTheme, Theme } from '../../theme'

type TComponent<T> = React.ComponentType<T>

export interface ButtonProps {
  onClick: () => void
}

const buttonThemer = (t: Theme) => ({
  backgroundColor: t.colors.primary,
  color: t.colors.secondary
})

const buttonStyler = (t: Theme, rest: ButtonProps) => {

  const buttonTheme = buttonThemer(t)
  const style = {
    ...buttonTheme,
    border: `2px solid ${t.colors.primary}`
  }
  return style
}

type IStyled<P extends {}> = P & {
  styleProps: any
}

const Button = ({styleProps, ...rest}: IStyled<ButtonProps>) => {
  return <button style={styleProps} {...rest} />
}


type TStyler = (t: Theme, rest: any) => any

export const buildComponent = <P extends{}>(
  Component: any, 
  styler:TStyler
) => {
  
  const custom = withTheme<P>(({theme, ...rest}) => {
    const style = styler(theme, rest)
    return <Component styleProps={style} {...rest} />
  }) 

  return custom

}

export const CustomStyleButton = buildComponent<ButtonProps>(Button, buttonStyler)

export const CustomStyleButton2 = withTheme<ButtonProps>(({theme, ...rest}) => {
  const style = buttonStyler(theme, rest)
  return <Button styleProps={style} {...rest} />
})
