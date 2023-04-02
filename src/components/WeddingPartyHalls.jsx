import { halls } from "../data/halls"

const WeddingHals = () => {
    const arr1 = ['person to contact', 'phone', 'e-mial']
    const arr2 = ['website', 'the distance of the wedding hall from the wedding venue', 'menu offer',  'guests: min./max','cost per guest with service details', 'accommodation offer', 'air conditioning', 'wedding hours']
    const arr3 = ['Does it offer extras: country/cheese/marine table, etc. and at what price', 'Additional fees (bottle opening, decorations, etc.)','Payment for damages',  'Can you have your own attractions (sweet table, photo booth, bartender)', 'Whether the ZAIKS license is purchased?']

    const contact = [];
    arr1.forEach((data, index) => {
        contact.push(<tr>{index+1}. {data}</tr>)
    })

    const details = [];
    arr2.forEach((data, index) => {
        details.push(<tr>{index+1}. {data}</tr>)
    })

    const extras = []
    arr3.forEach((data, index) => {
        extras.push(<tr>{index+1}. {data}</tr>)
    })

    return (<>
    <h3>Wedding Halls</h3>

    <div>
        <p>What is important to find the best hall?</p>
        <p>Visit several halls and take notes from up to 4 rooms that impressed you the most.</p>

        <table className="table">
            <tbody>
                <tr>
                    <th colspan="3">Information you need to check about 1 place</th>
                </tr>
                <tr>
                    <th>Contact</th>
                    <th>Basic information</th>
                    <th>Additional informations</th>
                </tr>
                <tr>
                    <td>{contact}</td>
                    <td>{details}</td>
                    <td>{extras}</td>
                </tr>
            </tbody>
        </table>
    </div>
    </>)
}
export default WeddingHals