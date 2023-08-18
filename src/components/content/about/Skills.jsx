import "../../../assets/css/content/about/skills.css";
import SkillBar from "./SkillBar.jsx";

const SKILLS = [
  {
    title: "HTML5",
    percent: 92,
  },
  {
    title: "React.js",
    percent: 80,
  },
  {
    title: "Next.js",
    percent: 70,
  },
  {
    title: "css",
    percent: 94,
  },
  {
    title: "HTML5",
    percent: 92,
  },
  {
    title: "React.js",
    percent: 80,
  },
  {
    title: "Next.js",
    percent: 70,
  },
  {
    title: "css",
    percent: 94,
  },
];

const Skills = () => {
  return (
    <div className={"skills"}>
      <h6 className="skills_title">SKILLS</h6>

      <div className={"skills_list"}>
        {SKILLS.map(({ title, percent }) => (
          <SkillBar key={title} title={title} percent={percent} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
