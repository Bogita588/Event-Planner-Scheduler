import {
  faCalendarAlt,
  faCalendarCheck,
  faUserFriends,
  faCog,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [eventName, setEventName] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    guests: 1,
    location: "",
  });
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/events", { state: { eventName, date, options } });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="menuToggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={`headerList ${menuOpen ? "open" : ""}`}>
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span>Create Event</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCalendarCheck} />
            <span>My Events</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faUserFriends} />
            <span>Invitations</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCog} />
            <span>Settings</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              Plan and Schedule Your Events Effortlessly
            </h1>
            <p className="headerDesc">
              Organize meetings, parties, conferences, and more with ease using
              our event planner and scheduler.
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <input
                  type="text"
                  placeholder="Event Name"
                  className="headerSearchInput"
                  onChange={(e) => setEventName(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarAlt} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <input
                  type="text"
                  placeholder="Location"
                  className="headerSearchInput"
                  onChange={(e) =>
                    setOptions({ ...options, location: e.target.value })
                  }
                />
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
