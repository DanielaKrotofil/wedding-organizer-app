import VisionStyles from "./VisionStyles"

const Vision = () => {
    return <>
    <section className="container">
        <h1>Your Vision</h1>
        <section className="wedding-date">
            <button>Wedding date</button>
        </section>
        <section className="wedding-priorities">
            <button>Priorities</button>
        </section>
        <VisionStyles/>
    </section>
    </>
}

export default Vision
