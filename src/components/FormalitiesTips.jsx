import { ceremonies } from "../data/ceremoniesFormal";

const FormalitiesTips = () => {
    return (<>
    <div className="formalities__tips">
    {ceremonies.map((ceremonies, id) => {
    return <div key={id} >
                <h2> {ceremonies.name}</h2>
                <p className="paragraph">{ceremonies.detail}</p>
            </div>
        })
    }
    </div>
    </>)
}
export default FormalitiesTips