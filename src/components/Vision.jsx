import VisionStyles from "./VisionStyles"
import { SelectStyle } from "./VisionSelection"
import WeddingDate from "./VisionSelection"
import WeddingPrio from "./Weddingpriorities"


const Vision = () => {
    return <>
    <section className="container">
        <h1>Your Vision</h1>
        <section className="central">
            <WeddingDate/>
            <SelectStyle/>
        </section>
        <section className="wedding-priorities">
            <WeddingPrio/>
        </section>
        <VisionStyles/>
    </section>
    </>
}

export default Vision
