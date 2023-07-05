import EventItem from './event-item';
import classes from './event-list.module.css';

function EventList({items}) {
  console.log(items);

  return (
    <ul className={classes.list}>
      Event list item
      {/* {items.map((event) => (
        <EventItem
          event={event}
        />
      ))} */}
    </ul>
  );
}

export default EventList;
