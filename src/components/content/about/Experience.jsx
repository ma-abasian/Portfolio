import ExperienceCart from "./ExperienceCart.jsx";

const EXPERIENCES = [
  {
    date: "2019 - Present",
    title: "Art Director - Facebook Inc",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    date: "2019 - Present",
    title: "Art Director - Facebook Inc",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    date: "2019 - Present",
    title: "Art Director - Facebook Inc",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    date: "2019 - Present",
    title: "Art Director - Facebook Inc",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const Experience = () => {
  return (
    <div>
      <h6 className="experience_title">EXPERIENCE</h6>
      <ul>
        {EXPERIENCES.map((experience) => (
          <ExperienceCart key={experience.title} experience={experience} />
        ))}
      </ul>
    </div>
  );
};

export default Experience;
