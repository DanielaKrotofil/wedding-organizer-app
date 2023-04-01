import FormalitiesList from "./FormalitiesTasks"
import FormalitiesTips from "./FormalitiesTips"
import WeddingCeremony from "./FormalitiesWeddingCeremony"



const Formalities = () => {
    return (<section className="formalities container">
        <h1>Formalities</h1>
        <WeddingCeremony/>
        <FormalitiesList/>
        <FormalitiesTips/>
    </section>)
}

export default Formalities