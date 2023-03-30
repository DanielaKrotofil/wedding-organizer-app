import { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import bohoimg from '../assets/boho/boh04.jpg';
import glamimg from '../assets/glamour/glam02.jpg';
import rustimg from '../assets/rustic/rust01.jpg';
import greenimg from '../assets/greenery/gree05.jpg';
import classicimg from '../assets/traditional/trad07.jpg';
import shabbyimg from '../assets/shabby chic/shc05.jpg';

const view = [
    {
        id: 1,
        title: 'Greenry',
        image: greenimg,
        link: 'https://www.pinterest.com/yourweddingco/160-greenery-wedding-ideas-2022-2023/'
    },
    {
        id: 2,
        title: 'Boho',
        image: bohoimg,
        link: 'https://www.pinterest.com/pin/753930793868738585/'
    },
    {
        id: 3,
        title: 'Traditional',
        image: classicimg,
        link: 'https://www.brides.com/gallery/classic-wedding-ideas'
    },
    {
        id: 4,
        title: 'Glamour',
        image: glamimg,
        link: 'https://www.pinterest.com/modernbrideandco/glamour-wedding/'
    },
    {
        id: 5,
        title: 'Shabby chic',
        image: shabbyimg,
        link: 'https://www.pinterest.com/pin/romantic-intimate-summer-garden-party-floral-feminine-southern-california-wedding--1086845322548364382/'
    },
    {
        id: 6,
        title: 'Rustic',
        image: rustimg,
        link: 'https://www.pinterest.com/pin/1101270915109569586/'
    },
];

const VisionStyles = () => {

    const [styles, setStyles] = useState([]);

    useEffect(() => {
        getDocs(collection(db, "styles")).then((querySnapshot) => {
        const tempArr = [];
        querySnapshot.forEach((doc) => {
            tempArr.push(doc.data());
       })

        setStyles(tempArr);
        });
    }, [])

    if (!styles) return <div>Loading...</div>;

    const showDetails = () => {
        console.log('klik');
    }

    const WeddingStylesLists = (props) => {
        return (<>
        <p>Characteristic:</p>
        {props.characteristic.map((el, index) => {return <li key={index}> {el}</li>})}
        <p>Primary colors:</p>
        {props.color1.map((el, index) => {return <li key={index}> {el}</li>})}
        <p>Another colors:</p>
        {props.color2.map((el, index) => {return <li key={index}> {el}</li>})}
        <p>Decorations:</p>
        {props.decoration.map((el, index) => {return <li key={index}> {el}</li>})}
        </>)
    }

    const WeddingStyles = () => {
        return (<>
            {styles.map(({theme, characteristics, mainColors, additionalColors, decorations}) => (
                <div className="wedding-styles__elements-single" key={theme}>
                    <button className="dropdown" onClick={showDetails}>{theme}</button>
                    <WeddingStylesLists characteristic={characteristics} color1={mainColors} color2={additionalColors} decoration={decorations}/>
                </div>))
            }
        </>)
    }

    const Inspirations = () => {
        return (<div className="wedding-styles__inspirations">
            <h2>Need inspirations?</h2>
            <p>Select styles and see what other people done to create dreamy wedding party</p>
            <div className="wedding-styles__inspirations__view">{view.map((view, id) => {
                return <div className="wedding-styles__inspirations__view-box" key={id}>
                    <h3>{view.title}</h3>
                    <img src={view.image} alt={view.title}/>
                    <a href={view.link} className="btn">see more inspirations</a>
                </div>
            })}</div>
    </div>)
    }

    return (
        <>
        <section className="wedding-styles">
            <h2>Wedding Styles</h2>
            <div className="wedding-styles__elements">
                <WeddingStyles styles={styles}/>
            </div>
            <Inspirations/>
        </section>
        </>
    )
}

export default VisionStyles