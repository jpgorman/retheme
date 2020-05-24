import * as React from "react";
import "./styles.css";
import { ThemeProvider } from './theme'
import { Button } from './components/button'
import { CustomButton } from './components/button/custom'
import { CustomStyleButton } from './components/button/customStyle'


export default function App() {
  return (
    <div className="App">
      <ThemeProvider>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button onClick={() => console.log('click')}>
        Themed
      </Button>
      <CustomButton onClick={() => console.log('click')}>
        CustomTheme
      </CustomButton>
      <CustomStyleButton onClick={() => console.log('click')}>
        CustomStyle
      </CustomStyleButton>
      </ThemeProvider>
    </div>
  );
}
