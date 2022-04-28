import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {

  const [navSize, setnavSize] = useState("translateY(0px)");
  const [navColor, setnavColor] = useState("transparent");

  const listenScrollEvent = () => {


    if (window.pageYOffset < 100) {
    
      setnavSize("translateY(-70px)");
      
      setTimeout(function () {
        setnavSize("translateY(0)");
     
      }, 200);
    } else {
      setnavSize("translateY(0px)");
      setnavColor('#456edf')
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div>
      <header className="hero" id="home">
        <div
          className="navbar top border-3"
          id="navbar"
          style={{ transform: navSize, background:navColor }}
        >
          <h1 className="logo text-[35px] text-left">
            <span className="text text-[35px] text-[#28a745]">
              <i className="fas fa-user-md"></i>
            </span>{" "}
            Dr. Pietro Lerro
            <hr />{" "}
            <small className="specialized">
              Specialista in Pediatria, Pediatra Gastroenterologo{" "}
            </small>
          </h1>
          <nav>
            <ul>
              <li>
                <a href="#home" >Home</a>
              </li>
              <li>
                <a href="#about" >Info</a>
              </li>
              <li>
                <a href="#contact">Contatti</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// import "./Navbar.css";
// export default function App() {
//   const [navSize, setnavSize] = useState("translateY(0px)");
//   const [navColor, setnavColor] = useState("transparent");
//   const listenScrollEvent = () => {
//     // window.scrollY > 10 ? setnavColor("#252734") : setnavColor("transparent");
//     window.scrollY > 10 ? setnavSize("translateY(-70px)") : setnavSize("translateY(0px)");
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", listenScrollEvent);
//     return () => {
//       window.removeEventListener("scroll", listenScrollEvent);
//     };
//   }, []);

//   return (
//     <div>
//       <nav
//         style={{
//           backgroundColor: navColor,
//           transform: navSize,
//           transition: "all 1s",
//         }}
//       >
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Project</li>
//           <li>Skills</li>
//           <li>Contact </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }
