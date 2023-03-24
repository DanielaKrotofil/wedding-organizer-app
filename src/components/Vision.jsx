import React from "react";
import { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import testPhoto from '../assets/img01.jpg'

const Vision = () => {
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
        <h1>Your Vision</h1>
        <div>
        {styles.map(({theme, characteristics, mainColors, decorations, additionalColors}) => (
            <div>
                <h3>{theme}</h3>
                <p>Characteristic: {characteristics}</p>
                <p>Primary colors: {mainColors}</p>
                <p>Another colors: {additionalColors}</p>
                <p>Decorations: {decorations}</p>
            </div>))
        }
        </div>
        <img src={testPhoto} alt='Test Photo'/>
        </>
    )
}

export default Vision