import { ceremonies } from "../data/ceremoniesFormal";
import { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';

const FormalitiesTips = () => {
    const [styles, setStyles] = useState([]);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        getDocs(collection(db, "styles")).then((querySnapshot) => {
            const tempArr = [];
            querySnapshot.forEach((doc) => {
                tempArr.push(doc.data());
            })

            console.log(tempArr);
        });
    }, [])

    return (<>
    <div className="formalities__tips">
    {ceremonies.map((ceremonies, id) => {
    return <div key={id} >
                <h2> {ceremonies.name}</h2>
                <p className="paragraph">{ceremonies.detail}</p>
            </div>
        })
    }
    </div>
    </>)
}
export default FormalitiesTips