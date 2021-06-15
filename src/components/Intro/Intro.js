import React from "react";
import "./Intro.css";
import sample from "./sample.jpeg";

const Intro = () => {
  return (
    <div className="intro">
      <div class="grid-container">
        <div class="grid-item">
          <div className="headline">Explore, Track and Map</div>
          <div className="large-text">
            Your all in one solution to mapping your adventures and sharing with
            friends.
          </div>
          <button>Create Your Map</button>
        </div>
        <div class="grid-item">
          <img src={sample} alt="my image" />
        </div>
        <div class="grid-item">
          <img src={sample} alt="my image" />
        </div>
        <div class="grid-item">
          <div className="small-header">
            A new seamless way to track your lifestyle all in one place
          </div>
          <div className="paragraph">
            Tracking your active lifestyle has never been easier. Let Map Maker
            combine all desired activities and routes into one visual map.
            Executed to perfection and personalization. Time to get tracking!
          </div>
        </div>
        <div class="grid-item">
          <div className="small-header">
            Easily share maps and stay connected with others
          </div>
          <div className="paragraph">
            Share your map activity with friends. Gain ideas, tips and advice
            from your fellow Map Makers by exploring together!
          </div>
        </div>
        <div class="grid-item">
          <img src={sample} alt="my image" />
        </div>
        <div class="grid-item">
          <div className="small-header">
            Combine all your Strava routes to display on one map
          </div>
          <div className="paragraph">
            Create your own comprehensive map of your strava routes. Choose to
            display any or all your sports. Map Maker is a great map to
            visualize your activity in an area, and to share with friends.
          </div>
        </div>
        <div class="grid-item">
          <button>Create Your Map</button>
        </div>
      </div>
    </div>
  );
};
export default Intro;
