import * as React from 'react'
import { withTheme, Theme } from '../../theme'

export interface ButtonProps {
  onClick: () => void
}

const buttonThemer = (t: Theme) => ({
  backgroundColor: t.colors.primary,
  color: t.colors.secondary
})

const buttonStyler = (t: Theme) => {
  const buttonTheme = buttonThemer(t)
  const style = {
    ...buttonTheme,
  }
  return style
}

export const Button = withTheme<ButtonProps>((props) => {
  const style = buttonStyler(props.theme)
  return <button style={style} {...props} />
})
