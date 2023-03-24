import './sass/main.scss'
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes, Link, NavLink, Outlet} from 'react-router-dom';
import Home from './components/Home';
import Vision from './components/Vision';
import Guests from './components/Guests';
import Formalities from './components/Formalities';
import Weddingparty from './components/Weddingparty';
import './firebase';


const Layout = () => {
  return (
      <>
          <nav className='nav'>
              <ul className='menubar'>
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
    <header className='pageHeader'>
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
    </header>

    <footer>
      <span>© 2023 Wedding Organizer</span>
    </footer>
    </>
  )
}

export default App