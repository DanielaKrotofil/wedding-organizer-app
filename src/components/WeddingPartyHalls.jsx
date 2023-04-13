import { useState } from "react";

const WeddingHallForm = () => {
    const [hall, setHall] = useState([]);

    const [hallValue, setHallValue] = useState('');
    const updateHall = ({target}) => setHallValue(target.value)
    const [contactValue, setContactValue] = useState('');
    const updateContact = ({target}) => setContactValue(target.value)

    const addNewDetail = (i) => {
        i.preventDefault()

        setHall(prevState => {
            const newEl = {
                hall: hallValue,
                contact: contactValue,
            }
            return [...prevState, newEl]
        })
    }

    return (<>
    <div className="">
        <h2>Our wedding hall</h2>
        <div className="notes">
            <form onSubmit={addNewDetail}>
                <div>
                    <form >
                        <label for="placeceremony">Wedding venue name and address</label>
                        <textarea rows="5" type="text" value={hallValue} onChange={updateHall}/>
                    </form>

                    <form >
                        <label>Person to contact</label>
                        <textarea value={contactValue} onChange={updateContact}/>
                    </form>

                    <form >
                        <label>Notes</label>
                        <textarea rows="15" cols="70"/>
                    </form>
                </div>
            </form>
        </div>
    </div>
    </>)
}

export default WeddingHallForm

/*
<div>
                    <label>Name (hall)</label>
                    <input type="text" value={nameValue} onChange={updateName} />
                    <label>Address (hall)</label>
                    <input type="text" value={addressValue} onChange={updateAddress}value={addressValue} onChange={updateAddress}/>
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
                </div>
*/