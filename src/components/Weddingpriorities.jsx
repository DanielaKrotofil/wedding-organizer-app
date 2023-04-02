import {useState} from "react";

const WeddingPrio = () => {

    const OurPriorities = () => {
        const [prioList, setPrioList] = useState([]);

        const [inputValue, setInputValue] = useState('');
        const updateInputValue = ({target}) => setInputValue(target.value)

        const addNewPrio = (e) => {
            e.preventDefault()
            setPrioList(prevState => {
                const newEl = {
                    id: prevState.length + 1,
                    name: inputValue,
                }
                return [...prevState, newEl]
            })
        }

        return (<div className="wedding-priorities__selection-part">
                <div className="toDoList">
                    <form className="header" onSubmit={addNewPrio}>
                        <h2>Your priorities</h2>
                        <p>Our priorities, i.e. what we care about the most</p>
                        <input value={inputValue} onChange={updateInputValue} type="text" placeholder="example: car"/>
                        <button className="btn-add" type='submit'>Add</button>
                    </form>

                    <ul>
                        {
                            prioList.map(priorities => <li key={priorities.id} onClick={() => addPrio(priorities.id)}>{priorities.name}</li>)
                        }
                    </ul>
                </div>
        </div>)
    };

    const OurnNotpriorities = () => {
        const [notprioList, setNotPrioList] = useState([]);
        const [inputValue, setInputValue] = useState('');
        const updateInputValue = ({target}) => setInputValue(target.value)

        const addNewPrio = (i) => {
            i.preventDefault()
            setNotPrioList(prevState => {
                const newEl = {
                    id: prevState.length + 1,
                    name: inputValue,
                }
                return [...prevState, newEl]
            })
        }

        return (<div className="wedding-priorities__selection-part">
                <div className="toDoList">
                    <form className="header" onSubmit={addNewPrio}>
                        <h2>Not priorities</h2>
                        <p>What is not so important to us, so we can save money</p>
                        <input value={inputValue} onChange={updateInputValue} type="text" placeholder="example: cats in wigs"/>
                        <button className="btn-add" type='submit'>Add</button>
                    </form>

                    <ul>
                        {
                            notprioList.map(notpriorities => <li key={notpriorities.id} onClick={() => addPrio(notpriorities.id)}>{notpriorities.name}</li>)
                        }
                    </ul>
                </div>
        </div>)
    };

    return (
        <>
        <h2>Your priorities</h2>
        <div className="wedding-priorities__text">
            <p className="paragraph">At the very beginning of preparations for the wedding, it is worth determining what your priorities are, i.e. what is most important to you and you cannot imagine saving on it.
    It's different for every couple. Some are able to pay for the best photographer, but they can give up flower decorations. For others, the wedding car will have to be great, but the wedding dress may be more modest. This can be counted indefinitely.</p>
            <p>So think about it together. If one thing seems very important to you and you can spend more money on it, find another that is less important to you so it may be a cheaper version</p>
        </div>
        <div className="wedding-priorities__selection">
            <OurPriorities/>
            <OurnNotpriorities/>
        </div>
        </>
    )
}

export default WeddingPrio