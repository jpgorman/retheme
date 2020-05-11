import * as React from 'react'
import { withTheme, Theme } from '../../theme'

export interface ButtonProps {
  onClick: () => void
}

const buttonThemer = (t: Theme) => ({
  backgroundColor: t.colors.primary,
  color: t.colors.secondary
})

export const Button = withTheme<ButtonProps>((props) => {
  const buttonTheme = buttonThemer(props.theme)
  const style = {
    ...buttonTheme,
  }
  return <button style={style} {...props} />
})
