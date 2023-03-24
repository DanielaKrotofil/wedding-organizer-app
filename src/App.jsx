import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './sass/main.scss'

import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase';



import image01 from '../src/assets/img01.jpg'


function App() {
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "styles")).then((querySnapshot) => {
      const tempArr = [];

      querySnapshot.forEach((doc) => {
        tempArr.push(doc.data());
      })

      setStyles(tempArr)
    });
    }, [])

  return (
    <>
    <h1>Wedding Planner</h1>
    {styles.map(({theme, characteristics, mainColors}) => (
      <div>
        <h4>{theme}</h4>
        <p>Primary colors: {mainColors}</p>
        <p>Characteristic: {characteristics}</p>
      </div>
    ))}
    <img src={image01} alt='image 01'/>
    </>
  )
}

export default App

/*
<div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Zaczynamy prace nad aplikacją w react</h1>
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
    </div>
*/