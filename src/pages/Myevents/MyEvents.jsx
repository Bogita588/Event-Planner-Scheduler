import React from "react";
import "./myEvents.css";
import EventImage1 from './EventImage1.png';
import eventimage2 from './eventimage2.png';
import eventimage3 from './eventimage3.png';
import eventimage4 from './eventimage4.png'


const events = [
    {
      title: "Event 1",
      description: "Description for Event 1",
      date: "2024-04-01",
      time: "10:00 AM",
      location: "Location 1",
      eventType: "Type 1",
      organizer: "Organizer 1",
      image: EventImage1,
    },
    {
      title: "Event 2",
      description: "Description for Event 2",
      date: "2024-04-02",
      time: "11:00 AM",
      location: "Location 2",
      eventType: "Type 2",
      organizer: "Organizer 2",
      image: eventimage2,
    },
    
    {
        title: "Event 2",
        description: "Description for Event 2",
        date: "2024-04-02",
        time: "11:00 AM",
        location: "Location 2",
        eventType: "Type 2",
        organizer: "Organizer 2",
        image: eventimage3,
      },
      
    {
        title: "Event 2",
        description: "Description for Event 2",
        date: "2024-04-02",
        time: "11:00 AM",
        location: "Location 2",
        eventType: "Type 2",
        organizer: "Organizer 2",
        image: eventimage4,
      },
  ];

const MyEvents = () => {
  

  return (
    <div className="my-events-container">
      <h1 className="my-events-heading">My Events</h1>
      <div className="events-grid">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-details">
              <h2 className="event-title">{event.title}</h2>
              <p className="event-description">{event.description}</p>
              <p className="event-metadata">
                Date: {event.date} | Time: {event.time} | Location: {event.location}
              </p>
              <p className="event-metadata">
                Organizer: {event.organizer} | EventType: {event.eventType}
              </p>
              <div className="event-actions">
                <button className="event-action-button">View Details</button>
                <button className="event-action-button">Edit</button>
                <button className="event-action-button">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEvents;
