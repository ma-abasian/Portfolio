import React from 'react';

const HeaderIntro = () => {
    return (
        <div className="header-intro">
            <h6><img draggable="false" role="img" className="emoji" alt="👋"
                     src="https://s.w.org/images/core/emoji/14.0.0/svg/1f44b.svg"/> Hi, I’ m</h6>
            <h1>Tapsi <span><img
                src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/mask.jpg" title=""
                alt=""/></span>d'Souza</h1>
            <h2>I'm a Developer </h2>

            <p className="pe-lg-5">We work with professionals and leaders who want to build careers that fulfil them
                intellectually, financially</p>
            <div className="btn-bar">
                <a className="px-btn px-btn-theme"
                   href="https://shtheme.com/demosd/tapsiwp/wp-content/uploads/2023/05/tapsi.pdf">Download cv <span
                    className="material-symbols-outlined">
download
</span> </a>
            </div>
        </div>
    );
};

export default HeaderIntro;