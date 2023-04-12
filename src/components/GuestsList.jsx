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
        <table>
            <tbody>
                <tr>
                    <th colspan="4">Guest List</th>
                </tr>
                <tr>
                    <th>Name and Surname</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>E-mail</th>
                </tr>
                {guestList.map(guests => <tr key={guests.id} onClick={() => addGuest(guests.id)}>
                    <td>{guests.name} {guests.surname}</td>
                    <td>{guests.address}</td>
                    <td>{guests.phone}</td>
                    <td>{guests.email}</td>
                </tr>)
            }
            </tbody>
        </table>
        </>)
    }
    return (<section>
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
                        <button className="btn" type='submit'>Add guest</button>
                        <p className="guestcard__form-alert">{alert.join(', ')}</p>
                    </form>
            </div>
            <div className="guestcard-body guestcard__list">
                <GuestFinalList />
            </div>
        </div>
    </section>)
}
export default GuestsList