import "../../../assets/css/content/about/experienceCard.css";
const ExperienceCart = ({ experience }) => {
  const { date, title, content } = experience;
  return (
    <li className={"experienceCart"}>
      <div className={"experienceCart_icon"}>
        <span className="material-symbols-outlined experienceCart_icon-style">
          business_center
        </span>
      </div>
      <div className={"experienceCart_content"}>
        <p className={"experienceCart_date"}>{date}</p>
        <h4 className={"experienceCart_title"}>{title}</h4>
        <p className={"experienceCart_text"}>{content}</p>
      </div>
    </li>
  );
};

export default ExperienceCart;
