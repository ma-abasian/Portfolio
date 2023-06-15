import "../../assets/css/Menu/menu.css"
import Title from "./Title.jsx";
import Button from "./Button.jsx";

const Menu = () => {
    const menuItems = [
        {id: 0, name: 'Home', value: 'house'},
        {id: 1, name: 'About', value: 'person'},
        {id: 2, name: 'Services', value: 'business_center'},
        {id: 3, name: 'Portfolio', value: 'newsmode'},
        {id: 4, name: 'Contact', value: 'phone_in_talk'},
    ]

    return (
        <div className="menu">
            <Title/>
            <ul className="menu__buttons">
                {
                    menuItems.map(({name, value, id}) => <Button key={id} name={name} value={value}/>
                    )
                }
            </ul>
        </div>
    );
};

export default Menu;