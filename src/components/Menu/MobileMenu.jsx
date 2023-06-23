import Title from "./Title.jsx";
import ToggleMenu from "./ToggleMenu.jsx";

const MobileMenu = ({onClick}) => {
  return (

      <div className="mobile__menu-container">
        <div className="mobile__menu">
          <Title/>
          <ToggleMenu onClick={onClick}/>
        </div>
      </div>
  );
};

export default MobileMenu;