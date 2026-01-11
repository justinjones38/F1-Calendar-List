
const Card = (props) => {
    const {eventList} = props;
    const eventCard = eventList.map((event) => {
        return (
            <div className="card" key={event.round}>
                <div className="card-img">
                    <img src={event.img} alt={event.location} />
                </div>
                <div className="card-info">
                    <h4>Round {event.round}</h4>
                    <h1>{event.location}</h1>
                    <h2>{event.name}</h2>
                </div>
                <div className="card-date">
                        <h4>{event.raceDate}</h4>
                </div>
                <div className="card-button">
                    <a href={event.link} target="_blank" rel="noopener noreferrer"><button>More Info</button></a>
                </div>
                
            </div>
        )
    })
    return (
        <div className="card-container">
            {eventCard}
        </div>
    )
}

export default Card;