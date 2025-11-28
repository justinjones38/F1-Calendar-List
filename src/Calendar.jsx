import events from "./events";
import Card from "./Card.jsx";


const Calendar = () => {
    const eventList = events;
    console.log(eventList)
    return (
        <>
            <Card eventList={eventList} />
        </>
    )
}

export default Calendar;