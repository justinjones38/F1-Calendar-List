
const Card = (props) => {
    const {eventList} = props;
    const eventCard = eventList.map((event) => {
        return (
            <div className="Card">
                <div className="Card-Img">
                    <img src={event.img} alt={location} />
                </div>
                <div className="Card-Info">
                    <h4 className="Text">Round {event.round}</h4>
                    <h1 className="Text">{event.location}</h1>
                    <h2 className="Text">{event.name}</h2>
                    <h4 className="Text">{event.raceDate}</h4>
                </div>
                <div className="Card-Button">
                    <button><a href={event.link} target="_blank">More Info</a></button>
                </div>
                
            </div>
        )
    })
    return (
        <div className="Card-Container">
            {eventCard}
        </div>
    )
}

export default Card;