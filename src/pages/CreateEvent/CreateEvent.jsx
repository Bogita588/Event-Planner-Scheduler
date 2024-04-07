import React, { useState } from "react";
import './createEvent.css'; 

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    eventType: "",
    organizer: "",
    ticketTypes: [],
    registrationDeadline: "",
    capacity: "",
    image: null,
    additionalResources: [],
    tags: "",
    schedule: [],
    privacy: "",
    socialMedia: "",
    feedbackEnabled: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="create-event-container">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        {/* Event Title */}
        <input
          type="text"
          placeholder="Event Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        {/* Event Description */}
        <textarea
          placeholder="Event Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        {/* Event Date and Time */}
        <input
          type="date"
          placeholder="Event Date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          placeholder="Event Time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        {/* Location */}
        <input
          type="text"
          placeholder="Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        {/* Event Type */}
        <input
          type="text"
          placeholder="Event Type"
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
          required
        />
        {/* Organizer */}
        <input
          type="text"
          placeholder="Organizer"
          name="organizer"
          value={formData.organizer}
          onChange={handleChange}
          required
        />
        
        <input
          type="date"
          placeholder="Registration Deadline"
          name="registrationDeadline"
          value={formData.registrationDeadline}
          onChange={handleChange}
          required
        />
        {/* Capacity */}
        <input
          type="number"
          placeholder="Event Capacity"
          name="capacity"
          value={formData.capacity}
          onChange={handleChange}
          required
        />
        {/* Event Image */}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required
        />
        
        <input
          type="text"
          placeholder="Tags"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          required
        />
        
        <input
          type="text"
          placeholder="Privacy Settings"
          name="privacy"
          value={formData.privacy}
          onChange={handleChange}
          required
        />
        
        <input
          type="text"
          placeholder="Social Media Integration"
          name="socialMedia"
          value={formData.socialMedia}
          onChange={handleChange}
        />
        {/* Feedback and Reviews */}
        <label>
          Enable Feedback:
          <input
            type="checkbox"
            name="feedbackEnabled"
            checked={formData.feedbackEnabled}
            onChange={() =>
              setFormData({
                ...formData,
                feedbackEnabled: !formData.feedbackEnabled,
              })
            }
          />
        </label>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
