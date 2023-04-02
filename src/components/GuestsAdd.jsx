import React, { useState } from "react";

const GuestsAdd = () => {
    const [counter, setCounter] = useState(0);
    const handleClick = () => {
        setCounter(prevState => prevState + 1);
    }
    const [formula, setFormula] = useState({ name: "", phone: '', address: '' });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormula((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (<>
    <div className="toDoList">
            <form onSubmit={handleSubmit} onClick={handleClick} className="header guests-form">
            <p className="guests-counter">Count of guestes: {counter}</p>
            <h2>Add Guest</h2>
                <label className="guests-textreas">
                    <div>
                        <label htmlFor="name">Name of guest</label>
                        <textarea cols="40" type="text" name="name" value={formula.name} onChange={handleChange} placeholder="Name and surname"/>
                    </div>
                    <div>
                        <label htmlFor="phone">Number of guest</label>
                        <textarea cols="40" type="number" name="phone" value={formula.phone} onChange={handleChange} placeholder="Phone" />
                    </div>
                    <div>
                        <label htmlFor="address">Address of guest</label>
                        <textarea cols="40" type="text" name="address" value={formula.address} onChange={handleChange} placeholder="Address"/>
                    </div>
                </label>
                <input type="submit" value="Add to list" />
            </form>
        </div>
    </>);
}
export default GuestsAdd