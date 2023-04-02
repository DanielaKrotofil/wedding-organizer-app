import React, { useState } from "react";
import { formatPostcssSourceMap } from "vite";

const GuestsAdd = () => {
    const [form, setForm] = useState({ name: "", phone: '', address: '' });
    const [counter, setCounter] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    const handleClick = () => {
        setCounter(prevState => prevState + 1);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div className="toDoList">
            <form onSubmit={handleSubmit} onClick={handleClick} className="header guests-form">
            <p className="guests-counter">Count of guestes: {counter}</p>
            <h2>Add Guest</h2>
                <label className="guests-textreas">
                    <div>
                        <label htmlFor="name">Name of guest</label>
                        <textarea cols="40" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name and surname"/>
                    </div>
                    <div>
                        <label htmlFor="phone">Number of guest</label>
                        <textarea cols="40" type="number" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />
                    </div>
                    <div>
                        <label htmlFor="address">Address of guest</label>
                        <textarea cols="40" type="text" name="address" value={form.address} onChange={handleChange} placeholder="Address"/>
                    </div>
                </label>
                <input type="submit" value="Add to list" />
            </form>
        </div>
    );
}
export default GuestsAdd