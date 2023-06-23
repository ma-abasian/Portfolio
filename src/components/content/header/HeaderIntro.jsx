import '../../../assets/css/content/header/headerIntro.css'

const HeaderIntro = () => {
    return (
        <div className="header__intro">
            <h6 className="header__intro-hi">
                <img draggable="false" role="img" className="emoji" alt="👋" src="https://s.w.org/images/core/emoji/14.0.0/svg/1f44b.svg"/>
                Hi, I’ m
            </h6>
            <h1 className="header__intro-name">
                Tapsi
                <img src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/mask.jpg" title="" alt=""/>
                d'Souza
            </h1>

            <h2 className="header__intro-job">I'm a Developer </h2>

            <p className="header__intro-about">We work with professionals and leaders who want to build careers that fulfil them
                intellectually, financially</p>
            <div className="header__intro-button">
                <a className="header__intro-btn" href="https://shtheme.com/demosd/tapsiwp/wp-content/uploads/2023/05/tapsi.pdf">
                    Download cv
                    <span className="material-symbols-outlined">
                    download
                    </span>
                </a>
            </div>
        </div>
    )
        ;
};

export default HeaderIntro;