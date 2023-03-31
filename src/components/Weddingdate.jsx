import {useState} from "react";

const WeddingDate = () => {
    const [weddingdate, setWeddingDate] = useState ('');

    const updateDate = ({target}) => {
        setWeddingDate(target.value)
    }

    return (
        <section className="wedding-date-selection">
            <div className="wedding-date-selection__main">
                <p>Please select your wedding date</p>
                <input value={weddingdate} onChange={updateDate} type='date' id="wedding-date"/>
            </div>
            <h2>{`Your date : ${weddingdate}`}</h2>
        </section>
    )
}

export default WeddingDate