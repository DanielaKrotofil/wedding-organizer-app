import { useState } from "react";

const GuestsList = () => {
    const [guestList, setGuestList] = useState([]);
    const [alert, setAlert] = useState([]);

    const [nameValue, setNameValue] = useState('');
    const updateName = ({target}) => setNameValue(target.value)
    const [surnameValue, setSurnameValue] = useState('');
    const updateSurname = ({target}) => setSurnameValue(target.value)
    const [phoneValue, setPhoneValue] = useState('');
    const updatePhone = ({target}) => setPhoneValue(target.value)
    const [addressValue, setAddressValue] = useState('');
    const updateAddress = ({target}) => setAddressValue(target.value)
    const [emailValue, setEmailValue] = useState('');
    const updateEmail = ({target}) => setEmailValue(target.value)

    const addNewGuest = (e) => {
        e.preventDefault()

        setGuestList(prevState => {
            const newEl = {
                id: prevState.length + 1,
                name: nameValue,
                surname: surnameValue,
                phone: phoneValue,
                address: addressValue,
                email: emailValue
            }

            setAlert([]);
            const localErrors = [];

            if (nameValue.length <2) localErrors.push('Remember about name');
            if (surnameValue.length <2) localErrors.push('remember about surname');
            setAlert(localErrors)

            return [...prevState, newEl]
        })
    }

    const GuestFinalList = () => {
        return (<>
        <div >
            {guestList.map(guests => <div className="guestcard__list-singleguest" key={guests.id} onClick={() => addGuest(guests.id)}>
                    <p>{guests.name} {guests.surname}</p>
                    <p>{guests.address}</p>
                    <p>{guests.phone}</p>
                    <p>{guests.email}</p>
                </div>)
            }
        </div>

        </>)
    }
    return (<section className="container">
        <p className="guestcard-counter">Count of guestes: {guestList.length}</p>
        <div className="guestcard">
            <div className=" guestcard-body guestcard__form">
                <h3>Enter guest details</h3>
                    <form  onSubmit={addNewGuest}>
                        <input value={nameValue} onChange={updateName} type="text" placeholder="name"/>
                        <input value={surnameValue} onChange={updateSurname} type="text" placeholder="surname"/>
                        <input value={phoneValue} onChange={updatePhone} type="number" placeholder="phone"/>
                        <input value={addressValue} onChange={updateAddress} type="text" placeholder="address"/>
                        <input value={emailValue} onChange={updateEmail} type="email" placeholder="e-mail"/>
                        <button className="btn-add" type='submit'>Add</button>
                        <p className="alert">{alert.join(', ')}</p>
                    </form>
            </div>
            <div className="guestcard-body guestcard__list">
                <GuestFinalList />
            </div>
        </div>
    </section>)
}
export default GuestsList