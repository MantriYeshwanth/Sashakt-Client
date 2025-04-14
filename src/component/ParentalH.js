import { Link } from "react-router-dom";
import Glass from "./buttonnss/Glass";
import "./ParentalH.css";

const ParentalH = () => {
  return (
    <div className="parental-container">
      <div className="parental-background"></div>

      <div className="parental-content">
        <div className="parental-card">
          <h2 className="parental-title">Family Assurance Hub</h2>

          <div className="parental-text">
            <p>
              Welcome to our Family Assurance hub! We're dedicated to children's
              welfare, offering engaging videos on Child Rights principles. Our
              gamified platform features educational games, designed to be
              violence-free and appropriate.
            </p>

            <p>
              With daily tasks taking just 5 minutes, we prioritize a healthy
              balance amidst screen time concerns. Beyond entertainment, we aim
              to empower children, fostering resilience against exploitation.
            </p>

            <p>
              Join our educational journey for a brighter future. Rest assured,
              we prioritize privacy and protection of any shared information.
            </p>

            <p className="highlight-text">
              Taking this step to empower every child of India with us will be a
              decision you won't regret.
            </p>
          </div>

          <div className="parental-actions">
            <Link to="/spin" className="wheel-link">
              <Glass buttonText="Wheel" style={{ fontSize: "24px" }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentalH;
