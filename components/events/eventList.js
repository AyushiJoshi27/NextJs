import EventItem from "./eventItem";

export default function EventList(data) {
    const {items} = data;

    return (
    <ul>
        {items && items.map((data) => {
            <EventItem itemData={data}/>
        })}
    </ul>
    )
}