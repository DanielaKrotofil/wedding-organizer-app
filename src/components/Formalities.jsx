import {useState} from "react";

const Formalities = () => {
    const [todoList, setTodoList] = useState([
        {
            id: 1,
            name: "Booking the wedding date and time at the registry office",
            done: false
        },
        {
            id: 2,
            name: "Stamp duty",
            done: true
        },
        {
            id: 3,
            name: "Outdoor wedding fees",
            done: false
        },
        {
            id: 4,
            name: "Booking a date in the church",
            done: false
        }
    ]);

    const [inputValue, setInputValue] = useState('');

    const updateInputValue = ({target}) => setInputValue(target.value)

    const onAddNewTodo = (e) => {
        e.preventDefault()
        setTodoList(prevState => {
            const newEl = {
                id: prevState.length + 1,
                name: inputValue,
                done: false,
            }
            return [...prevState, newEl]
        })
    }

    const onTodoClick = (idToChange) => {
        setTodoList(prevState => {
            const prevStateCP = [...prevState]

            const indexToChange = prevStateCP.findIndex(({ id }) => id === idToChange);
            prevStateCP[indexToChange] = { ...prevStateCP[indexToChange], done: !prevStateCP[indexToChange].done }

            return prevStateCP
        })
    }

    return (
        <div className="toDoList">
            <form className="header" onSubmit={onAddNewTodo}>
                <h2>Formalities List</h2>
                <input value={inputValue} onChange={updateInputValue} type="text" placeholder="example: Order Of Wedding Ceremony"/>
                <button className="btn-add" type='submit'>Dodaj</button>
            </form>

            <ul>
                {
                    todoList.map(todo => <li key={todo.id} onClick={() => onTodoClick(todo.id)} className={todo.done ? 'done' : ''}>{todo.name}</li>)
                }
            </ul>
        </div>
    )
}

export default Formalities