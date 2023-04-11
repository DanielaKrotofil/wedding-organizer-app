import GuestsList from "./GuestsList"
import GuestTips from "./GuestsLimit"

const Guests = () => {
    return (<section className="guests container">
        <h1>Your guests</h1>
        <GuestTips/>
        <GuestsList/>
    </section>)
}
export default Guests