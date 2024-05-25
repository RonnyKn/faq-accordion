import "./App.css";
import { faqs } from "./data/data";
import HeaderDekstop from "./assets/images/background-pattern-desktop.svg";
import HeaderMobile from "./assets/images/background-pattern-mobile.svg";
import StarIcon from "./assets/images/icon-star.svg";
import SingleFaq from "./components/singleFaq/SingleFaq";

function App() {
  return (
    <div className="container">
      <header className="header">
        <img
          className="header-desktop"
          src={HeaderDekstop}
          alt="background_dekstop.svg"
        />
        <img
          className="header-mobile"
          src={HeaderMobile}
          alt="background_mobile.svg"
        />
      </header>

      <div className="faq">
        <div className="faq-title">
          <img src={StarIcon} alt="icon_star.svg" />
          <h1>FAQs</h1>
        </div>

        {faqs.map((faq, idx) => (
          <div className="faq-body" key={idx}>
            <SingleFaq faq={faq} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
