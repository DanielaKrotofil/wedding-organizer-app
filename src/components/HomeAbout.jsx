import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faWifi, faPiggyBank, faFaceGrinHearts } from '@fortawesome/free-solid-svg-icons';

const ListsIcon = () => {
  return (<>
    <div className="about__app__item">
      <span className="about__app__item_img">
          <FontAwesomeIcon icon={faList} />
        </span>
        <h3>Lists</h3>
      <p>You can find here to-do list, list of guests and more!</p>
    </div>
  </>)
}

const HelpIcon = () => {
  return (<>
    <div className="about__app__item">
      <span className="about__app__item_img">
        <FontAwesomeIcon icon={faFaceGrinHearts} />
      </span>
      <h3>Help</h3>
      <p>Help with organization of wedding with pleasure: formal tips, styling tips, decorating tips and more</p>
    </div>
  </>)
}

const InternetIcon = () => {
  return (<>
    <div className="about__app__item">
      <span className="about__app__item_img">
        <FontAwesomeIcon icon={faWifi} />
      </span>
      <h3>Internet</h3>
      <p>To use this app you need to be connected with the Internet</p>
    </div>
  </>)
}

const PiggyIcon = () => {
  return (<>
    <div className="about__app__item">
      <span className="about__app__item_img">
        <FontAwesomeIcon icon={faPiggyBank} />
      </span>
      <h3>Free</h3>
      <p>No need money to use this app</p>
    </div>
  </>)
}

const HomeAbout = () => {
    return (<>
    <section className='container about'>
      <h2>About App</h2>
      <div className="about__app">
          <ListsIcon/>
          <HelpIcon/>
          <InternetIcon/>
          <PiggyIcon/>
      </div>
    </section>
    </>)
}

export default HomeAbout