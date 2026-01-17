import eventList from "./events.json";
import Card from "./Card.jsx";


const Calendar = () => {
    console.log(eventList)
    return (
        <>
            <Card eventList={eventList} />
        </>
    )
}

export default Calendar;