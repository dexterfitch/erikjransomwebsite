import MainBody from "./MainBody";
import Dialects from "./Dialects";
import Languages from "./Languages";
import Credits from "../Credits";
import Experiences from "../Experiences";

function VoiceActor() {
  return (
    <>
        <h1 className="h3 page-title">Voice&thinsp;<span className="special">/</span>Actor</h1>
        <MainBody />
        <Languages />
        <Dialects />
        <h4 className="sub-title mt-5">Credits</h4>
        <h5 className="sub-title mt-4">Plays & Musicals</h5>
        <Credits category="playsmusicals" />
        <h5 className="sub-title mt-5">Film & Television</h5>
        <Credits category="filmtelevision" />
        <h5 className="sub-title mt-5">Voice Over</h5>
        <Credits category="voiceover" />
        <h4 className="sub-title mt-5">Accolades/Experiences/Training</h4>
        <Experiences />
        <h4 className="sub-title mt-4">Special Skills</h4>
        <p>Speaks German (Hochdeutsch), sight-reading music, drivers' license, various reptilian noises, selected accents and dialects include: African American Vernacular English, British RP, Cockney, Estuary, French, General Australian, General African, General Slavic, German, Irish, Italian, Klingon, Russian, Scandinavian, Scottish, Spanish, Yorkshire (more upon request.)</p>
    </>
  );
}

export default VoiceActor;