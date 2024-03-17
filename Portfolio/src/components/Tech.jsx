import {useState,useEffect} from "react";
import { styles } from "../style";  
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (

    <div>
      <div className="sm:mb-5 mb-8">
      <p className={`${styles.sectionSubText} text-center`}>
          Technologies I have learnt
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Skills
        </h2>
      </div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          {isMobile? <img src={technology.icon} alt={technology.name} />: <BallCanvas icon={technology.icon} />}
          <p className='text-center'>{technology.name}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");