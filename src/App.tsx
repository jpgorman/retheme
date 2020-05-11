import * as React from "react";
import "./styles.css";
import { ThemeProvider } from './theme'
import { Button } from './components/button'
import { CustomButton } from './components/button/custom'


export default function App() {
  return (
    <div className="App">
      <ThemeProvider>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button onClick={() => console.log('click')}>
        Click me
      </Button>
      <CustomButton onClick={() => console.log('click')}>
        Click me
      </CustomButton>
      </ThemeProvider>
    </div>
  );
}
