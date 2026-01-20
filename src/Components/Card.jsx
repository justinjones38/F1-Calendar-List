
const Card = (props) => {
    const {eventList} = props;

    const eventCard = eventList.map((event, index) => {
        return (
            <div className="card" key={event.meeting_key}>
                <div className="card-img">
                    <img src={event.circuit_image} alt={event.location} />
                </div>
                <div className="card-info">
                    <h1> {event.location}</h1>
                    <h2>{event.meeting_name}</h2>
                </div>
                <div className="card-round">
                    <h4>Round {index + 1}</h4>
                </div>
                <div className="card-date">
                    <h2>{event.date_start} - {event.date_end}</h2>
                </div>
                <div className="card-button">
                    <a href={event.link} target="_blank" rel="noreferrer"><button>More Info</button></a>
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