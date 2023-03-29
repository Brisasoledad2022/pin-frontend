
import { aboutText } from "./aboutText";

const About = ()  => {
  return (
    <div id="About" className="container my-5">
      <h2>About Us</h2>
      <div className="card">
        <div className="card-body">
          <p>{aboutText}</p>

        </div>
      </div>
    </div>
  );
}

export default About;
