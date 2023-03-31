import {useState} from "react";

const WeddingDate = () => {
    const [weddingdate, setWeddingDate] = useState ('');

    const updateDate = ({target}) => {
        setWeddingDate(target.value)
    }

    return (
        <div className="wedding-vision-selection">
            <span className="wedding-vision-selection__main">
                <p>Please select your wedding date</p>
                <input value={weddingdate} onChange={updateDate} type='date' id="wedding-date"/>
            </span>
            <h2>{`Your date : ${weddingdate}`}</h2>
        </div>
    )
}

export default WeddingDate