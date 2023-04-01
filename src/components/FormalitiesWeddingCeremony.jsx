
const WeddingCeremony = () => {
    const ceremonies = [
        {
            id: 1,
            name: 'civil',
        },
        {
            id: 2,
            name: 'church',

        },
        {
            id: 3,
            name: 'concordat',
        },
        {
            id: 4,
            name: 'humanist',
        },
    ];


    return (<div className="formalities__select">
                <form>
                    <fieldset>
                        <legend>What is the nature of your marriage ceremony?</legend>
                        {ceremonies.map((ceremonies, id) => {
                            return <label key={id} className="checkbox">
                                        <input type="radio" name='ceremonies' value={ceremonies.name}/>
                                        <span/>
                                        {ceremonies.name}
                                        <br />
                                    </label>
                                }
                            )
                        }
                    </fieldset>
                </form>

                <div className="formalities__notes">
                    <form >
                        <label for="placeceremony">Place of wedding</label>
                        <textarea rows="5" type="text" id="placeceremony" placeholder="Example: Elevation Church 11416 E Independence Blvd
Suite N, Matthews, NC, 28105" />
                    </form>

                    <form >
                        <label>Person to contact</label>
                        <textarea />
                    </form>

                    <form >
                        <label>Notes / other arrangements</label>
                        <textarea rows="15" cols="70"/>
                    </form>
                </div>
        </div>
    )

}
export default WeddingCeremony