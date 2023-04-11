import { ceremonies } from "../data/ceremonies"

const WeddingCeremony = () => {
    return (<>
        <div className="formradio__select">
            <form>
                <fieldset>
                    <legend className="formradio__title">What is the nature of your marriage ceremony? *</legend>
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
                <small>*If you need help choosing, there are hints at the bottom of the page</small>
            </form>
        </div>
        <div className="notes">
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
    </>)
}
export default WeddingCeremony