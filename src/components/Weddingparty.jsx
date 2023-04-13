
import { PartyTips } from './WeddingPartTips';
import WeddingHallForm from './WeddingPartyHalls';

const Weddingparty = () => {

    return <section className="container weddingparty">
        <h1>Wedding Party</h1>
        <WeddingHallForm/>
        <div className="notes">
            <form >
                <label>Notes</label>
                <textarea rows="15" cols="70"/>
            </form>
        </div>
        <PartyTips/>
    </section>
}

export default Weddingparty