import FormalitiesList from "./FormalitiesTasks"
import FormalitiesTips from "./FormalitiesTips"
import WeddingCeremony from "./FormalitiesWeddingCeremony"
import { CeremonyTips } from "./FormalitiesTips"


const Formalities = () => {
    return (<section className="formalities container">
        <h1>Formalities</h1>
        <WeddingCeremony/>
        <CeremonyTips/>
        <FormalitiesList/>
        <FormalitiesTips/>
    </section>)
}

export default Formalities