import tableformal from '../assets/table-setting-formal.jpg';
import tableinformal from '../assets/table-setting-informal.jpg';

const Plates = () => {
    const simplestyle = ['boho', 'greenry', 'rustic'];
    const restlestyle = ['glamour', 'shabby chic', 'classic/traditional']
    return (<>
    <div className="table__plates">
        <div className="box">
            <span className='box-text'>
                <p>Formal table setting good for wedding style:</p>
                {restlestyle.join(", ")}
            </span>
            <img src={tableformal} alt="Formal" className="box-image"/>
        </div>

        <div className="box">
            <span className='box-text'>
                <p>Informal table setting good for wedding style:</p>
                {simplestyle.join(", ")}
            </span>
            <img src={tableinformal} alt="Informal" />
        </div>
    </div>
    </>)
}

const PartyTipsTable = () => {
    return (<>
        <div className='table__layout'>
            <h3>Table layout is important</h3>
            <span className="table__layout-text">
                <p>You have many options for the arrangement of tables, but you have to adapt the arrangement to the number of guests and space in the room</p>
                <p>See below for some table layout suggestions</p>
            </span>
            <img src="https://i.pinimg.com/564x/7a/8e/d2/7a8ed2eec63bd42058d16df07b070776.jpg" alt="layouts" />
            <a href="https://pl.pinterest.com/pin/68744883649/" className="btn">click here for more inspirations</a>
        </div>
        <Plates/>
    </>)
}

export const PartyTips = () => {
    return (<section>
        <div>
            <PartyTipsTable/>
        </div>
    </section>)
}
