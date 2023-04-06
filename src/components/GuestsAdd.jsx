import { useState, ReactDOM } from "react";

const GuestsAdd = () => {
    const [form, setForm] = useState({ name: '', surname: '', address: '', phone: '', email: '' });
    const [errors, setErrors] = useState([]);
    const [counter, setCounter] = useState(0);

    const handleChange = (e) => {
        e.preventDefault();
        setErrors([]);
        const { name, surname, address, phone, email, value } = e.target;

        const localErrors = [];
        if (form.name.length <2) localErrors.push('too short name');
        if (form.surname.length <2) localErrors.push('too short surname');
        if (form.address.length <2) localErrors.push('add address');
        if (form.phone.length <5) localErrors.push('add phone');
        if (!form.email.includes('@')) localErrors.push(' enter email or "@none" ')

        if (localErrors.length > 0) {
            setErrors(localErrors)
        } else {
            setCounter(prevState => prevState + 1);
        }

        setForm((prevState) => {
        return {
            ...prevState,
            id: prevState.length + 1,
            [name]: value,
            [surname]: value,
            [address]: value,
            [phone]: value,
            [email]: value,
        };
        });
    };

    return ( <section className="container">

        <div className="guestcard">
            <p className="guestcard-counter">Count of guestes: {counter}</p>
            <div className="guestcard__body">
                <form onSubmit={handleChange}>
                    <label >Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} />
                    <label >Surname</label>
                    <input type="text" name="surname" value={form.surname} onChange={handleChange} />
                    <label>Address</label>
                    <input type="text" name="address" value={form.address} onChange={handleChange} />
                    <label>Phone</label>
                    <input type="number" name="phone" value={form.phone} onChange={handleChange} />
                    <label >e-mail</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} />
                    <button className="btn" type="submit" value='submit'>Add Guest</button>
                    <p className="alert">{errors.join(' | ')}</p>
                </form>
            </div>
        </div>
    </section>);
}
export default GuestsAdd
