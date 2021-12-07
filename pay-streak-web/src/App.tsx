import React from 'react';
import firebase from 'firebase/compat/app';
import SocialMediaAuth from './config/auth';
import logo from './logo.svg';
import './App.css';
import { googleProvider } from '.';

function App() {
  const handleLoginProvider = async (provider: firebase.auth.AuthProvider) => {
    console.log(provider);
    await SocialMediaAuth(provider).then((res) => {
      console.log(res.user);
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => handleLoginProvider(googleProvider)}>
          googleでログイン
        </button>
      </header>
    </div>
  );
}

export default App;
