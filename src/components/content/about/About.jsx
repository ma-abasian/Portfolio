import LeftAbout from "./LeftAbout.jsx";
import RightAbout from "./RightAbout.jsx";
import "../../../assets/css/content/about/aboutMe.css";

const About = () => {
  return (
    <div className="about_container">
      <div className="left_about">
        <LeftAbout />
      </div>
      <div className="right_about">
        <RightAbout />
      </div>
    </div>
  );
};

export default About;
