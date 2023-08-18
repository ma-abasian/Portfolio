import "../../../assets/css/content/about/communicationCard.css";

const CommunicationCard = ({ name, value, link }) => {
  return (
    <a href={link}>
      <li className={"communication_card"}>
        <div className={"communication_card-icon"}>
          <span className="material-symbols-outlined icon">{value}</span>
        </div>
        <div className={"communication_card-text"}>
          <p className={"communication_card-link"}>{name}</p>
        </div>
      </li>
    </a>
  );
};

export default CommunicationCard;
