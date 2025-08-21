import './App.css';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from './assets/Loading animation.json';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

function Loading() {
  return (
    <Player
      autoplay
      loop
      src={animationData}
      style={{ height: '300px', width: '300px' }}
    />
  );
}

function App() {
  useEffect(() => {
    toast.info('Projem üzerinde çalışıyorum ✨🚀');
    toast.info('Working on my project ✨🚀');
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
      <Loading />
      <p>Loading…</p>
      <ToastContainer />
    </div>
  );
}

export default App;

{
  /* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */
}
