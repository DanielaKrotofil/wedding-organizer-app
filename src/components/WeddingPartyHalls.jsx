import { halls} from "../data/halls"
import {useEffect, useState} from 'react';
import HallsGetInfo from "./WeddingHalsGetInfo";

const WeddingHals = () => {
    console.log(halls)

    return (<div className="weddingparty__halls">
    <h2>Wedding Halls</h2>
    <div>

        <div className="text">
            <p>What is important to find the best hall?</p>
            <p>Visit several halls and take notes from up to 4 rooms that impressed you the most.</p>
        </div>

        <HallsGetInfo/>

        <div className="text">
            <p className="text-paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia inventore sunt a ipsam commodi dolor alias nihil qui, delectus voluptatibus ab nesciunt praesentium dolorum non soluta repellendus? Quae, quis veniam.</p>
        </div>

    </div>
    </div>)
}
export default WeddingHals

