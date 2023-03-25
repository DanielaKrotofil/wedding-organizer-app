import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faWifi, faPiggyBank, faFaceGrinHearts } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
    <>
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
          <p>Help with organization of wedding with pleasure: formal tips, styling tips, decorating tips and more</p>
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
    </>
    )
}

export default Home