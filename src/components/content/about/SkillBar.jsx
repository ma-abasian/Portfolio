const SkillBar = ({ title, percent }) => {
  return (
    <div className={"skills_item"}>
      <h6 className={"skills_bar_title"}>{title}</h6>
      <div className="skills_bar">
        <div
          className={"skills_bar_in"}
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${percent}%` }}
        >
          <span className={"skills_bar_percent"}>{percent}%</span>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
