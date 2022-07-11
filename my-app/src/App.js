import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Trolls
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <ButtonGroup>
        
        <Button variant="contained"
        href="https://www.youtube.com/watch?v=UK3XlkutJSY"
        >Krissed</Button>
        
        <Button variant="contained"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        >Rick Roll</Button>
        
        <Button variant="contained"
        href="https://mrdoob.com/projects/chromeexperiments/google-gravity/"
        >Google</Button>
        
        <Button variant="contained">Contained</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="contained">Contained</Button>
        </ButtonGroup>

        
      </header>
    </div>
  );
}

export default App;
