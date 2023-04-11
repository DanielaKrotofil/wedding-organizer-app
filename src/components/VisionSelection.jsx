import {useState} from "react";
import view from '../data/ceremoniesStyleImg';

const WeddingDate = () => {
    const [weddingdate, setWeddingDate] = useState ('not chosen');

    const updateDate = ({target}) => {
        setWeddingDate(target.value)
    }

    return (
        <div className="selections">
            <span className="selections__main">
                <p>Please select your wedding date</p>
                <input value={weddingdate} onChange={updateDate} type='date' id="wedding-date"/>
            </span>
            <h2>{`Your date : ${weddingdate}`}</h2>
        </div>
    )
}

export default WeddingDate


export const SelectStyle = () => {
    const [weddingstyle, setWeddingStyle] = useState ('not chosen');

    const updateStyle = ({target}) => {
        setWeddingStyle(target.value)
    }
    return (<>
        <div className="selections">
            <span className="selections__main">
                    <p>Please select your wedding style*</p>
                    <select value={weddingstyle} onChange={updateStyle} id="wedding-style">
                        {view.map((view, id) => {
                            return <option key={id} value={view.title}>{view.title}</option>
                        })}
                    </select>
            </span>
            <h2>{`Style of your wedding: ${weddingstyle}`}</h2>
        </div>
        <small>*If you need help choosing, there are hints at the bottom of the page</small>
    </>)
}