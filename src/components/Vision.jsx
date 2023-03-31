import VisionStyles from "./VisionStyles"
import WeddingDate from "./Weddingdate"
import WeddingPrio from "./Weddingpriorities"

const Vision = () => {
    return <>
    <section className="container">
        <h1>Your Vision</h1>
        <section className="wedding-date">
            <WeddingDate/>
        </section>
        <section className="wedding-priorities">
            <WeddingPrio/>
        </section>
        <VisionStyles/>
    </section>
    </>
}

export default Vision
