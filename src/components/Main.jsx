import Menu from "./Menu/Menu.jsx";
import Content from "./content/Content.jsx";
import "../assets/css/main.css"

const Main = () => {
    return (
        <div className="main">
            <Menu/>
            <Content/>
        </div>
    );
};

export default Main;