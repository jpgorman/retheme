import * as React from "react";
import "./styles.css";
import createTheme from './withTheme'


const theme = {
  colors: {
    primary: 'red'
  }
}

type Theme = typeof theme

interface IProps {
  onClick: () => void
}

const {withTheme, ThemeProvider}  = createTheme<Theme>(theme)

const CustomButton = withTheme<IProps>((props) => {
  const style = {
    backgroundColor: props.theme.colors.primary
  }
  return <button style={style} {...props} />
})


export default function App() {
  return (
    <div className="App">
      <ThemeProvider>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <CustomButton onClick={() => console.log('click')}>
        Click me
      </CustomButton>
      </ThemeProvider>
    </div>
  );
}
