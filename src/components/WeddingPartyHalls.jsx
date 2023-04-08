import { halls} from "../data/halls"
import HallsGetInfo from "./WeddingHalsGetInfo";

const WeddingHals = () => {
    console.log(halls)

    return (<div className="weddingparty__halls">
        <h2>Wedding Halls</h2>

        <div>
            <div className="text">
                <p>What is important to find the best hall?</p>
                <p>Visit several halls and take notes from up to 4 rooms that impressed you the most.</p>
            </div>

            <HallsGetInfo/>

            <div className="text">
                <p className="text-paragraph">Remember that the wedding hall is supposed to please you! Below are examples of wedding halls in Poland - take a look, maybe one of them will be the perfect choice?</p>
            </div>

            <div className="weddingparty__halls-examples">
            {halls.map(halls => <div key={halls.id} onClick={() => addHall(halls.id)}>
                    <a className="btn" href={halls.web}> {halls.name}</a>
                    <ul>
                        <li>{halls.address}</li>
                        <li>{halls.phone}</li>
                    </ul>
                </div>)
            }
        </div>
        </div>
    </div>)
}
export default WeddingHals

