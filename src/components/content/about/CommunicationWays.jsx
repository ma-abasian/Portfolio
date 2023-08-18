import pic from "../../../assets/images/home-banner.png";
import CommunicationCard from "./CommunicationCard.jsx";
import "../../../assets/css/content/about/communicationWays.css";

const COMMUNICATION_WAYS = [
  { id: 0, name: "Home", value: "house", link: "" },
  { id: 1, name: "About", value: "person", link: "" },
  { id: 2, name: "Services", value: "business_center", link: "" },
  { id: 3, name: "Portfolio", value: "newsmode", link: "" },
  { id: 4, name: "Contact", value: "phone_in_talk", link: "" },
];
const CommunicationWays = () => {
  return (
    <div className={"communication_ways"}>
      <div className={"communication_ways-image"}>
        <img src={pic} alt="" />
      </div>
      <ul className={"communication_ways-cards"}>
        {COMMUNICATION_WAYS.map(({ id, name, value, link }) => (
          <CommunicationCard key={id} name={name} value={value} link={link} />
        ))}
      </ul>
    </div>
  );
};

export default CommunicationWays;
