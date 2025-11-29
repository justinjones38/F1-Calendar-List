
const Card = (props) => {
    const {eventList} = props;
    const eventCard = eventList.map((event) => {
        return (
            <div className="Card">
                <img src={event.img} alt={location} />
                <h1>{event.name}</h1>
                <h2>{event.raceDate}</h2>
                <h4>Round {event.round}</h4>
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