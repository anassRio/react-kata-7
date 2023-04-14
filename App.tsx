import * as React from 'react';
import { renderToStaticNodeStream } from 'react-dom/server';
import './style.css';


function WelcomTitle( props ){
  const { user, primary } = props;

  const message = 'Welcome ${user} !';
  const message1 = `Welcome ${user}!`;

  const msg = `Welcom ${user}!`;

  return primary ? <h1>{msg} </h1> : <h2>{message} </h2>
}

export default function App() {
  return (

      <WelcomTitle user='anass' />
    
  );
}


