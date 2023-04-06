import { useState } from "react";

const GuestsAdd = () => {
    const [counter, setCounter] = useState(0);
    const handleClick = () => {
        setCounter(prevState => prevState + 1);
    }

    const GuestNameSurname = () => {
        return (<>
        <div>
            <label for="name">Name</label>
            <input></input>
        </div>
        <div>
            <label for="surname">Surname</label>
            <input></input>
        </div>
        </>)
    }

    const GuestPhone = () => {
        return (<>
        <div>
            <label for="Phone">Phone</label>
            <input type="number" name="phone"/>
        </div>
        </>)
    }
    const GuestEmail = () => {
        return (<>
        <div>
            <label for="email">e-mail</label>
            <input type="text" name="email"/>
        </div>
        </>)
    }

    const GuestAddress = () => {
        return (<>
        <div>
            <label for="address">address</label>
            <input type="text" name="address"/>
        </div>
        </>)
    }

    const SubmitBtn = () => {
        return (<>
        <button onClick={handleClick}>Add Guest</button>
        </>)
    }

    return (<>
    <div className="container">
        <div className="guestcard">
            <h1>Your guests</h1>
            <p className="guestcard-counter">Count of guestes: {counter}</p>
            <div className="guestcard__body">
                <form>
                    <GuestNameSurname/>
                    <GuestAddress/>
                    <GuestPhone/>
                    <GuestEmail/>
                    <SubmitBtn/>
                </form>
            </div>
        </div>
    </div>
    </>)
}
export default GuestsAdd