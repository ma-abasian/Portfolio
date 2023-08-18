import "../../assets/css/content/content.css";
import Header from "./header/Header.jsx";
import About from "./about/About.jsx";
import Portfolio from "./portfolio/Portfolio.jsx";

const Content = () => {
  return (
    <div className="content">
      <section className="home section">
        <div className="container">
          <Header />
        </div>
      </section>
      <section className="about section">
        <div className="container">
          <About />
        </div>
      </section>
      <section className="portfolio section">
        <div className="container">
          <Portfolio />
        </div>
      </section>
    </div>
  );
};

export default Content;
