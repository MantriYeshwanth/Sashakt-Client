import MysteryBox from "./games/MysteryBox";
import "./AgeTwelveAndMore.css";

const AgeTwelveAndMore = () => {
  return (
    <div className="age-twelve-container">
      <div className="age-twelve-background"></div>
      <div className="age-twelve-overlay"></div>

      <div className="age-twelve-content">
        <h1 className="age-twelve-title">
          Are you ready to enhance your skills and take it to the next level?
        </h1>

        <h5 className="age-twelve-subtitle">
          Click on the mystery box below to get a surprise
        </h5>

        <div className="mystery-box-container">
          <MysteryBox />
        </div>

        {/* <div className="age-twelve-buttons">
          <Link to="/learning" className="age-twelve-link">
            <LGB buttonText="Learning" />
          </Link>

          <Link to="/gaming" className="age-twelve-link">
            <LGB buttonText="Gaming" />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default AgeTwelveAndMore;
