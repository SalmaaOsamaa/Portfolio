import { useState, useEffect, useContext } from "react";
import "./index.css";
import About from "./components/about/About";
import MyIntro from "./components/Intro/MyIntro";
import ProjectList from "./components/projects/ProjectList";
import Contact from "./components/contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import AnimCursor from "./components/UI/AnimCursor";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundImage: darkMode
          ? `linear-gradient(to right, #0F2027, #203A43)`
          : `linear-gradient(to right, #8360c3, #2ebf91)`,
        transition: "backgroundImage 15s ease ",
        color: darkMode && "white",
      }}
      className="myapp"
    >
      {" "}
      {isLoading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <Navbar />

          <AnimCursor />
          <Toggle />
        
          <MyIntro />
          <About />
          <ProjectList />
          <Contact />
        </>
      )}
    </div>
  );
};

export default App;
