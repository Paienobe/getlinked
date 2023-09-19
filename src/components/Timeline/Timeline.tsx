import "./Timeline.css";
import { timeline } from "./timelineData";

const Timeline = () => {
  return (
    <div className="timeline">
      <div>
        <div className="timeline_top">
          <h2>Timeline</h2>
          <p>
            Here is the breakdown of the time we anticipate <br />
            using for the upcoming event.
          </p>
        </div>

        <div className="timeline_holder">
          {timeline.map((item, index) => {
            return (
              <div className="single_timeline" key={item.title}>
                <div>
                  <p className="timeline_title">{item.title}</p>
                  <p className="timeline_description">{item.description}</p>
                </div>

                <div>
                  <div className="vertical_line"></div>
                  <div className="sphere">{index + 1}</div>
                </div>

                <div>
                  <p className="timeline_date">{item.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
