import './sass/main.scss'
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes, Link, NavLink, Outlet} from 'react-router-dom';
import Home from './Home';
import Vision from './Vision';
import Guests from './Guests';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faWifi, faPiggyBank, faFaceGrinHearts } from '@fortawesome/free-solid-svg-icons';

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

    <section className='container about'>
      <h2>About App</h2>
      <div className="about__app">
        <div className="about__app__item">
          <span className="about__app__item_img">
            <FontAwesomeIcon icon={faList} />
          </span>
          <h3>Lists</h3>
          <p>You can find here to-do list, list of guests and more!</p>
        </div>

        <div className="about__app__item">
          <span className="about__app__item_img">
            <FontAwesomeIcon icon={faFaceGrinHearts} />
          </span>
          <h3>Help</h3>
          <p>Help with rganiztion of wedding with pleasure: formal tips, styling tips, decorating tips and more</p>
        </div>

        <div className="about__app__item">
          <span className="about__app__item_img">
            <FontAwesomeIcon icon={faWifi} />
          </span>
          <h3>Internet</h3>
          <p>To use this app you need to be connected with the Internet</p>
        </div>

        <div className="about__app__item">
          <span className="about__app__item_img">
            <FontAwesomeIcon icon={faPiggyBank} />
          </span>
          <h3>Free</h3>
          <p>No need money to use this app</p>
        </div>
      </div>
    </section>

    <footer>
      <span>© 2023 Wedding Organizer</span>
    </footer>
    </>
  )
}

export default App