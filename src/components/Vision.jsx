import React from "react";
import { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import testPhoto from '../assets/img01.jpg'
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

const Vision = () => {
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

    return (
        <>
        <h1>Your Vision</h1>

        <section className="wedding-styles container">
            <h2>Wedding Styles</h2>
            <div className="wedding-styles__elements">
            {styles.map(({theme, characteristics, mainColors, additionalColors, decorations}) => (
                <div className="wedding-styles__elements-single" key={theme}>
                    <button className="dropdown" onClick={showDetails}>{theme}</button>
                    <p>Characteristic:</p>
                    {characteristics.map((el, index) => {return <li key={index}> {el}</li>})}
                    <p>Primary colors:</p>
                    {mainColors.map((el, index) => {return <li key={index}> {el}</li>})}
                    <p>Another colors:</p>
                    {additionalColors.map((el, index) => {return <li key={index}> {el}</li>})}
                    <p>Decorations:</p>
                    {decorations.map((el, index) => {return <li key={index}> {el}</li>})}
                </div>))
            }
            </div>

            <div className="wedding-styles__inspirations">
                <h2>Need inspirations?</h2>
                <p>Select styles and see what other people done to create dreamy wedding party</p>
                <div className="wedding-styles__inspirations-buttons">
                        <a href='https://www.pinterest.com/yourweddingco/160-greenery-wedding-ideas-2022-2023/' className="btn">Greenry</a>
                        <a href='https://www.pinterest.com/modernbrideandco/glamour-wedding/' className="btn">Glamour</a>
                        <a href='https://www.pinterest.com/pin/753930793868738585/' className="btn">Boho</a>
                        <a href='https://www.pinterest.com/pin/1101270915109569586/' className="btn">Rustic</a>
                        <a href='https://www.pinterest.com/pin/romantic-intimate-summer-garden-party-floral-feminine-southern-california-wedding--1086845322548364382/' className="btn">Shabby chic</a>
                        <a href='https://www.brides.com/gallery/classic-wedding-ideas' className="btn">Traditional</a>
                </div>
            </div>
        </section>
        </>
    )
}

export default Vision

/*
{styles.map(({theme, characteristics, mainColors, decorations, additionalColors}) => (
                <div>
                    <h3>{theme}</h3>
                    <p>Characteristic: {characteristics}</p>
                    <p>Primary colors: {mainColors}</p>
                    <p>Another colors: {additionalColors}</p>
                    <p>Decorations: {decorations}</p>
                </div>))
            }

<img src={testPhoto} alt='Test Photo'/>
*/

/*
<p>Primary colors:</p>
                    {mainColors}
                    <p>Another colors:</p>
                    {additionalColors}
                    <p>Decorations:</p>
                    {decorations}
*/

/*
<section className="wedding-date">
            <button>Wedding date</button>
        </section>

        <section className="wedding-priorities">
            <button>Priorities</button>
        </section>
*/