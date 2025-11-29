
const Card = (props) => {
    const {eventList} = props;
    const eventCard = eventList.map((event) => {
        return (
            <div className="Card">
                <img src={event.img} alt={location} />
                <h4>Round {event.round}</h4>
                <h4>{event.raceDate}</h4>
                <h1>{event.location}</h1>
                <h2>{event.name}</h2>
                <button><a href={event.link} target="_blank">More Info</a></button>
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