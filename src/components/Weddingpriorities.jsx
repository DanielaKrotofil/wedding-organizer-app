const WeddingPrio = () => {
    return <>
    <h2>Priorities</h2>
    <div className="wedding-priorities__text">
        <p>At the very beginning of preparations for the wedding, it is worth determining what your priorities are, i.e. what is most important to you and you cannot imagine saving on it.</p>
        <p>It's different for every couple. Some are able to pay for the best photographer, but they can give up flower decorations. For others, the wedding car will have to be great, but the wedding dress may be more modest. This can be counted indefinitely.</p>
        <p>So think about it together. If one thing seems very important to you and you can spend more money on it, find another that is less important to you so it may be a cheaper version</p>
    </div>
    <div className="wedding-priorities__selection">
        <div className="wedding-priorities__selection-part">
            <label for="priorities">Our priorities, i.e. what we care about the most</label>
            <textarea id="priorities"></textarea>
        </div>
        <div className="wedding-priorities__selection-part">
            <label for="not-priorities">What is not so important to us, so we can save money</label>
            <textarea id="not-priorities"></textarea>
        </div>
    </div>
    </>
}

export default WeddingPrio