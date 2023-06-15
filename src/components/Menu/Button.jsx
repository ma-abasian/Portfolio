import "../../assets/css/Menu/button.css"
// eslint-disable-next-line react/prop-types
const Button = ({name, value}) => {

    return (
        <li className="menu__button">
            <a href="#" className="menu__button-link">

                    <span className="material-symbols-outlined menu__button-icon">
                        {value}
                    </span>
                    <div className="menu__button-title">
                        {name}
                    </div>

            </a>
        </li>
    );
};

export default Button;