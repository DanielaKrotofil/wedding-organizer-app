import { useState } from "react";

const GuestsAdd = () => {
    const [formAdd, setFormAdd] = useState({ name: '', surname: '', address: '', phone: '', email: '' });
    const [errors, setErrors] = useState([]);
    const [counter, setCounter] = useState(0);

    const handleChange = (e) => {
        e.preventDefault();
        setErrors([]);
        const { name, surname, address, phone, email, value } = e.target;

        const localErrors = [];
        if (formAdd.name.length <2) localErrors.push('too short name');
        if (formAdd.surname.length <2) localErrors.push('too short surname');
        if (formAdd.address.length <2) localErrors.push('add address');
        if (formAdd.phone.length <5) localErrors.push('add phone');
        if (!formAdd.email.includes('@')) localErrors.push(' enter email or "xx@xx.com" ')

        setFormAdd((prevState) => {
            e.preventDefault();
            return {
                ...prevState,
                [name]: value,
                [surname]: value,
                [address]: value,
                [phone]: value,
                [email]: value,
            };
        });

        if (localErrors.length > 0) {
            setErrors(localErrors)
        } else {
            setCounter(prevState => prevState + 1);
        }
    };

    return ( <section className="container">
        <p className="guestcard-counter">Count of guestes: {counter}</p>
        <div className="guestcard">
            <div className=" guestcard-body guestcard__form">
                <h3>Enter guest details</h3>
                <form onSubmit={handleChange}>
                    <label >Name</label>
                    <input type="text" name="name" value={formAdd.name} onChange={handleChange} />
                    <label >Surname</label>
                    <input type="text" name="surname" value={formAdd.surname} onChange={handleChange} />
                    <label>Address</label>
                    <input type="text" name="address" value={formAdd.address} onChange={handleChange} />
                    <label>Phone</label>
                    <input type="number" name="phone" value={formAdd.phone} onChange={handleChange} />
                    <label >e-mail</label>
                    <input type="email" name="email" value={formAdd.email} onChange={handleChange} />
                    <button className="btn" type="submit" value='submit'>Add Guest</button>
                    <p className="alert">{errors.join(' | ')}</p>
                </form>
            </div>
            <div className="guestcard-body guestcard__list">
                <ul>
                    <li>Guest: {formAdd.name} {formAdd.surname} | Address: {formAdd.address} | Contact: {formAdd.phone} {formAdd.email}</li>
                </ul>
            </div>
        </div>
    </section>);
}
export default GuestsAdd
