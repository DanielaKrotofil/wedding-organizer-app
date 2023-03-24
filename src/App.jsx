import './sass/main.scss'
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes, Link, NavLink, Outlet} from 'react-router-dom';
import Home from './Home';
import Vision from './Vision';
import Guests from './Guests';

const Layout = () => {

  return (
      <>
          <nav className='nav'>
              <ul className='menubar'>
                  <li className='link'><NavLink to='/'>Home</NavLink></li>
                  <li className='link'><NavLink to='vision'>Vision</NavLink></li>
                  <li className='link'><NavLink to='guests'>Guests</NavLink></li>
                  <li className='link'><NavLink to='/'>Wedding Party</NavLink></li>
                  <li className='link'><NavLink to='/'>Formalities</NavLink></li>
              </ul>
          </nav>
      </>
  )
}

function App() {
  return (
    <>
    <header className='pageHeader'>
      <HashRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='vision' element={<Vision/>}/>
                    <Route path="guests" element={<Guests/>}/>
                </Route>
            </Routes>
      </HashRouter>
    </header>

    <section className='banner'>
      <h1>Wedding <span>Planner</span> </h1>
    </section>
    </>
  )
}

export default App

/*
    <HashRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='blog' element={<Blog/>}/>
                    <Route path="pricing" element={<Pricing/>}/>
                </Route>
            </Routes>
      </HashRouter>
*/