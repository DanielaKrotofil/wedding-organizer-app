import { useState } from "react";
import { HashRouter, Route, Routes, Link, NavLink, Outlet} from 'react-router-dom';
import Home from './components/Home';
import Vision from './components/Vision';
import Guests from './components/Guests';
import Formalities from './components/Formalities';
import Weddingparty from './components/Weddingparty';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Layout = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
      <>
          <nav className='nav'>
              <button className="hamburger"
              onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
                <FontAwesomeIcon icon={faBars}/>
              </button>
              <ul className={isNavExpanded ? "menubar-mobile" : "menubar"}>
                  <li className='link'><NavLink to='/'>Home</NavLink></li>
                  <li className='link'><NavLink to='vision'>Vision</NavLink></li>
                  <li className='link'><NavLink to='guests'>Guests</NavLink></li>
                  <li className='link'><NavLink to='weddingparty'>Wedding Party</NavLink></li>
                  <li className='link'><NavLink to='formalities'>Formalities</NavLink></li>
              </ul>
          </nav>
          <Outlet/>
      </>
  )
}

const App = () => {
  return (
    <>
      <HashRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='vision' element={<Vision/>}/>
                    <Route path="guests" element={<Guests/>}/>
                    <Route path='weddingparty' element={<Weddingparty/>}/>
                    <Route path='formalities' element={<Formalities/>}/>
                </Route>
            </Routes>
      </HashRouter>


      <footer>
        <span>© 2023 Wedding Organizer</span>
      </footer>
    </>
  )
}

export default App