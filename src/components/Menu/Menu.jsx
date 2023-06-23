import "../../assets/css/Menu/menu.css"
import Title from "./Title.jsx";
import Button from "./Button.jsx";
import MobileMenu from "./MobileMenu.jsx";
import {useState} from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    {id: 0, name: 'Home', value: 'house'},
    {id: 1, name: 'About', value: 'person'},
    {id: 2, name: 'Services', value: 'business_center'},
    {id: 3, name: 'Portfolio', value: 'newsmode'},
    {id: 4, name: 'Contact', value: 'phone_in_talk'},
  ]

  const handleMobileMenu = () => {
    setIsOpen(!isOpen);
    const menu = document.getElementById('menu');
    if (!isOpen) menu.style.left = "0";
    else menu.style.left = "-100px";
  }

  return (
      <>

        <MobileMenu onClick={handleMobileMenu}/>

        <div className="menu" id="menu">
          <Title/>
          <ul className="menu__buttons">
            {
              menuItems.map(({name, value, id}) => <Button key={id} name={name} value={value}/>
              )
            }
          </ul>
        </div>
      </>
  );
};

export default Menu;