
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
        </div>
    )

}
export default WeddingCeremony