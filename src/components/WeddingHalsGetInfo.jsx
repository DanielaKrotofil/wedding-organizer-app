const HallsGetInfo = () =>{
    const arr1 = ['person to contact', 'phone', 'e-mial']
    const arr2 = ['website', 'The distance of the wedding hall from the wedding venue', 'Menu offer',  'Guests: min./max','Cost per guest with service details', 'Accommodation offer', 'Air conditioning', 'Wedding hours and cost an extra hours']
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
    <table className="table">
        <tbody>
            <tr>
                <th colspan="3">Information you need to check about each place</th>
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