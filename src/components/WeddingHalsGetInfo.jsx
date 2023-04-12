const HallsGetInfo = () =>{
    const arr1 = ['Person to contact', 'Phone', 'E-mial']
    const arr2 = ['Website', 'The distance of the wedding hall from the wedding venue', 'Menu offer',  'Guests: min./max','Cost per guest with service details', 'Accommodation offer', 'Air conditioning', 'Wedding hours and cost an extra hours']
    const arr3 = ['Does it offer extras: country/cheese/marine table, etc. and at what price', 'Additional fees (bottle opening, decorations, etc.)','Payment for damages',  'Can you have your own attractions (sweet table, photo booth, bartender)', 'Whether the ZAIKS license is purchased?']

    const contact = [];
    arr1.forEach((data, index) => {
        contact.push(<p key={index}>{data}</p>)
    })

    const details = [];
    arr2.forEach((data, index) => {
        details.push(<p key={index}>{data}</p>)
    })

    const extras = []
    arr3.forEach((data, index) => {
        extras.push(<p key={index}>{data}</p>)
    })

    return (<>
    <h2>Halls</h2>
    <div className="text">
        <p>What is important to find the best hall?</p>
        <p>Visit several halls and take notes from up to 4 rooms that impressed you the most.</p>
    </div>
    <table className="table">
        <tbody>
            <tr>
                <th colSpan="3">Information you need to check about each place</th>
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
    </>)

}
export default HallsGetInfo