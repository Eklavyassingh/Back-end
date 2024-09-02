import React from "react";
import AbtNavbar from "../Aboutpage/Abt-navbar";
import AboutUsBackground from "../../Assets/about-banner.png";
import AboutUsImage from "../../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const AbtHome = () => {
  return (
    <div id="about-us-section" className="about-us-section-container">
      <AbtNavbar />
      <div className="about-us-background-image-container">
        <img src={AboutUsBackground} alt="About Us Background" />
      </div>
      <div className="about-us-image-container">
        <img src={AboutUsImage} alt="About Us" />
      </div>
      <div className="about-us-text-container">
        <h1 className="primary-heading">About Uddhrti</h1>
        <p className="primary-text">
          <span className="tab"></span>Welcome to Uddhrti, where innovation
          meets compassion in the face of disaster. Our journey began with a
          simple yet profound question:{" "}
          <em>“How can we help save lives when every second counts?”</em>
        </p>
        <p className="primary-text">
          <span className="tab"></span>During the devastating Wayanad landslides
          in 2024, many lives were lost due to delayed response caused by
          fragmented information. It was a heart-wrenching tragedy that could
          have been mitigated with better data aggregation and communication.
          This incident became the catalyst for our project.
        </p>
        <p className="primary-text">
          <span className="tab"></span>At Uddhrti, our mission is clear: to
          empower government bodies, first responders, and communities with
          real-time, reliable information that can save lives. We believe that
          technology should be a force for good, and we’re committed to using it
          to make a difference in the world.
        </p>
        <p className="primary-text">
          <span className="tab"></span>We envision a world where technology
          bridges the gap between crisis and relief, ensuring that no call for
          help goes unanswered. Our goal is to create a global network of
          informed, connected, and prepared communities that can withstand the
          challenges of any disaster. Through continuous innovation, we aim to
          set a new standard in disaster management, where data-driven insights
          guide every decision and every second counts toward saving lives.
        </p>
        <div className="about-us-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default AbtHome;
