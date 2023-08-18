import "../../assets/css/Menu/menu.css";
import Title from "./Title.jsx";
import Button from "./Button.jsx";
import MobileMenu from "./MobileMenu.jsx";
import { useCallback, useEffect, useRef, useState } from "react";

const menuItems = [
  { id: 0, name: "Home", value: "house" },
  { id: 1, name: "About", value: "person" },
  { id: 2, name: "Services", value: "business_center" },
  { id: 3, name: "Portfolio", value: "newsmode" },
  { id: 4, name: "Contact", value: "phone_in_talk" },
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      menuRef.current.style.top = window.scrollY + "px";
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileMenu = useCallback(() => {
    setIsOpen(!isOpen);
    if (!isOpen) menuRef.current.style.left = "0";
    else menuRef.current.style.left = "-100px";
  }, [isOpen]);

  return (
    <>
      <MobileMenu onClick={handleMobileMenu} />

      <div ref={menuRef} className="menu" id="menu">
        <Title />
        <ul className="menu__buttons">
          {menuItems.map(({ name, value, id }) => (
            <Button key={id} name={name} value={value} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
