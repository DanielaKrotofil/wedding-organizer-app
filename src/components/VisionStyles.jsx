import { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import Inspirations from './VisionInspirations';

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
                <div className="wedding-styles__element" key={theme}>
                    <button className="dropdown" onClick={showDetails}>{theme}</button>
                    <WeddingStylesLists characteristic={characteristics} color1={mainColors} color2={additionalColors} decoration={decorations}/>
                </div>))
            }
        </>)
    }

    return (
        <>
        <section>
            <h2>Wedding Styles - hints</h2>
            <div className="wedding-styles">
                <WeddingStyles styles={styles}/>
            </div>
            <Inspirations/>
        </section>
        </>
    )
}
export default VisionStyles

