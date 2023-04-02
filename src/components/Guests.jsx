import GuestsAdd from "./GuestsAdd"

const Guests = () => {
    return (<section className="guests container">
    <GuestsAdd/>
    </section>)
}


export default Guests
/*
const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Wiadomość:
        <textarea value={form.name} onChange={handleChange} />
        <textarea value={form.address} onChange={handleChange} />
      </label>
      <input type="submit" value="Wyślij" />
    </form>
  );
};
*/