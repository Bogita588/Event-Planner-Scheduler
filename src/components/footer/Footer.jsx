import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Events</li>
          <li className="fListItem">Venues</li>
          <li className="fListItem">Speakers</li>
          <li className="fListItem">Agendas</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Attendees</li>
          <li className="fListItem">Tickets</li>
          <li className="fListItem">Sponsors</li>
          <li className="fListItem">Exhibitors</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Event Planning</li>
          <li className="fListItem">Event Management</li>
          <li className="fListItem">Budgeting</li>
          <li className="fListItem">Marketing</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Customer Support</li>
          <li className="fListItem">Contact Us</li>
          <li className="fListItem">Terms of Service</li>
          <li className="fListItem">Privacy Policy</li>
        </ul>
      </div>
      <div className="fText">© 2024 Event Planner & Scheduler</div>
    </div>
  );
};

export default Footer;
