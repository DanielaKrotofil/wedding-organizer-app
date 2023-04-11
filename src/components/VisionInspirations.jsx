import view from '../data/ceremoniesStyleImg';

const Inspirations = () => {
    return (<div className="vision__inspirations">
        <h2>Need inspirations?</h2>
        <p>Select styles and see what other people done to create dreamy wedding party</p>
        <div className="vision__inspirations__view">{view.map((view, id) => {
            return <div className="vision__inspirations__view-box" key={id}>
                <h3>{view.title}</h3>
                <img src={view.image} alt={view.title}/>
                <a href={view.link} className="btn">see more inspirations</a>
            </div>
        })}</div>
</div>)
}

export default Inspirations