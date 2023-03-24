import React from "react";
//import { collection, getDocs } from "../firebase/firestore";
//import { db } from '../firebase';
//import { useEffect, useState } from 'react'
//import image01 from '../assets/img01.svg'



const Vision = () => {
    const [styles, setStyles] = useState([]);

 //   useEffect(() => {
 //       getDocs(collection(db, "styles")).then((querySnapshot) => {
 //       const tempArr = [];

 //       querySnapshot.forEach((doc) => {
 //           tempArr.push(doc.data());
 //      })

//        setStyles(tempArr)
  //      });
  //  }, [])

    return (
        <>
            <h1>Your vision</h1>
            <img src={image01} alt='image 01'/>
        </>
    )
}

export default Vision

/*
{styles.map(({theme, characteristics, mainColors}) => (
            <div>
                <h3>{theme}</h3>
                <p>Primary colors: {mainColors}</p>
                <p>Characteristic: {characteristics}</p>
            </div>
            ))}
*/