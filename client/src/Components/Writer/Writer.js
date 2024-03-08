import MainBody from "./MainBody";
import Services from "../Services";
import Credits from "../Credits";
import Experiences from "../Experiences";
import ScrollToAnchor from "../../Utilities/ScrollToAnchor";

function Writer() {
  return (
    <>
      <ScrollToAnchor />
      <h1 className="h3 page-title with-special">Writer</h1>
      <MainBody />
      <h4 className="sub-title mt-5" id="wr-1">Services</h4>
      <Services category="writing" />
      <h4 className="sub-title mt-5">Selected Works</h4>
      <h5 className="sub-title mt-4" id="wr-2">Full Productions</h5>
      <Credits category="fullproductions" />
      <h5 className="sub-title mt-4" id="wr-3">Staged Readings & Concerts</h5>
      <Credits category="readingsconcerts" />
      <h4 className="sub-title mt-5" id="wr-4">Education & Awards</h4>
      <Experiences category="writing" />   
      <h4 className="sub-title mt-5" id="wr-5">Additional Skills</h4>
      <ul>
        <li>Conversational German (Level B-1)</li>
        <li>German to English translation</li>
      </ul>
    </>
  );
}

export default Writer;