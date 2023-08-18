import Image from "./Image.jsx";
import HeadImage from '../../../assets/images/home-banner.png';
import  '../../../assets/css/content/header/header.css';
import HeaderContent from "./HeaderContent.jsx";

const Header = () => {
    return (
        <div className="home__header">
            <Image imageSrc={HeadImage}/>
            <HeaderContent/>
        </div>
    );
};

export default Header;
