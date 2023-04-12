import { useState } from "react";

const WeddingHallForm = () => {
    const [hall, setHall] = useState([]);

    const [nameValue, setNameValue] = useState('');
    const updateName = ({target}) => setNameValue(target.value)
    const [addressValue, setAddressValue] = useState('');
    const updateAddress = ({target}) => setAddressValue(target.value)

    const addNewDetail = (i) => {
        i.preventDefault()

        setHall(prevState => {
            const newEl = {
                name: nameValue,
                address: addressValue,
            }
            return [...prevState, newEl]
        })
    }

    return (<>
    <div className="">
        <h2>Our wedding hall</h2>
        <div className="">
            <h3>Enter hall details</h3>
            <form onSubmit={addNewDetail}>
            <label>Name (hall)</label>
            <input type="text" value={nameValue} onChange={updateName} />
            <label>Address (hall)</label>
            <input type="text" value={addressValue} onChange={updateAddress}/>
            <label>Person to contact</label>
            <input type="text" id="person" />
            <label>Price per adult</label>
            <input type="text" id="priceadult" />
            <label>Number of adults</label>
            <input type="number" id="noadult" />
            <label>Price per child</label>
            <input type="text" id="pricechild" />
            <label >Number of childer</label>
            <input type="number" id="nochildren" />
            <label >Payment on account</label>
            <input type="number" id="advance"/>
            <label >Total cost of the wedding hall</label>
            <input type="number" id="cost"/>
            <label>Time of wedding</label>
            start: <input type="time" id="startwedding"/> end: <input type="time" id="endwedding"/>
            <label>Cake serving time</label>
            <input type="time" id="caketime"/>
            <label >ZAIKS fee?</label>
            <input type="radio" id="zaiksyes" />
            <label>Yes</label>
            <input type="radio" id="nozaiks" />
            <label>No</label>
            </form>
        </div>
        <div className="notes">
            <form >
                <label>Notes / other arrangements</label>
                <textarea rows="15" cols="70"/>
            </form>
        </div>
    </div>
    </>)
}

export default WeddingHallForm