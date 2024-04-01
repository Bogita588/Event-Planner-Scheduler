import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Stay Connected with Your Events!</h1>
      <span className="mailDesc">Subscribe to receive important updates about your events, invitations, and settings.</span>
      <div className="mailInputContainer">
        <input type="email" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
