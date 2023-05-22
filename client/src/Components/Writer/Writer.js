import MainBody from "./MainBody";
import Services from "../Services";
import Credits from "../Credits";
import Experiences from "../Experiences";

function Writer() {
  return (
    <>
      <h1 className="h3 page-title with-special">Writer</h1>
      <MainBody />
      <h4 className="sub-title mt-5">Services</h4>
      <Services category="writing" />
      <h4 className="sub-title mt-5">Selected Works</h4>
      <h5 className="sub-title mt-4">Full Productions</h5>
      <Credits category="fullproductions" />
      <h5 className="sub-title mt-4">Staged Readings & Concerts</h5>
      <Credits category="readingsconcerts" />
      <h4 className="sub-title mt-5">Education & Awards</h4>
      <Experiences category="writing" />   
      <h4 className="sub-title mt-5">Additional skills</h4>
      <ul>
        <li>Conversational German (Level B-1)</li>
        <li>German to English translation</li>
      </ul>
    </>
  );
}

export default Writer;