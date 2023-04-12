
import { PartyTips } from './WeddingPartTips';
import WeddingHallForm from './WeddingPartyHalls';

const Weddingparty = () => {

    return <section className="container weddingparty">
        <h1>Wedding Party</h1>
        <WeddingHallForm/>
        <PartyTips/>
    </section>
}

export default Weddingparty