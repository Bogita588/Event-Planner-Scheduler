import "./EventList.css";

const EventList = () => {
  return (
    <div>
      <h2>Browse by Event type</h2> {/* Add an h2 heading */}
      <div className="eList">
        <div className="eListItem">
          <img
            src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
            alt=""
            className="eListImg"
          />
          <div className="eListTitles">
            <h1>Conferences</h1>
            <h2>120 events</h2>
          </div>
        </div>
        <div className="eListItem">
          <img
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
            alt=""
            className="eListImg"
          />
          <div className="eListTitles">
            <h1>Parties</h1>
            <h2>300 events</h2>
          </div>
        </div>
        <div className="eListItem">
          <img
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
            alt=""
            className="eListImg"
          />
          <div className="eListTitles">
            <h1>Meetings</h1>
            <h2>200 events</h2>
          </div>
        </div>
        <div className="eListItem">
          <img
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
            alt=""
            className="eListImg"
          />
          <div className="eListTitles">
            <h1>Workshops</h1>
            <h2>150 events</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventList;
