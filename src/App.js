import './App.css';
import { useState, useEffect } from 'react';

import profilephoto from './imgs/profilephoto.jpg';
//project pictures
import weatherproject from './imgs/weatherproject.png';
import mentalmeproject from './imgs/mentalmeproject.png';
import todoproject from './imgs/todoproject.png';
import etchasketchproject from './imgs/etchasketchproject.png';
//icons
import githubicon from './imgs/githubicon.png'
import livesiteicon from './imgs/livesiteicon.jpg'

function App() {
  const [boldOne, setBoldOne] = useState(false);
  const [boldTwo, setBoldTwo] = useState(false);
  const [boldThree, setBoldThree] = useState(false);
  const [boldStatus, setBoldStatus] = useState(true);

  //will run when the page renders and when the value of bold status is changed
  useEffect(()=>{
    setBoldTimers();
    return () => { //used to avoid memory leaks or clean up code
      clearTimeout(setBoldTimers);
      
    };
  }, [boldStatus]);

  //sets the timer for each pronounciation to be bolded
  const setBoldTimers = () => {
    setTimeout(() => setBoldOne(true), 1000); //paw
    setTimeout(() => setBoldTwo(true), 2000); //lee
    setTimeout(() => setBoldThree(true), 3000); //nuh

    //after we set the bolds to false, we change the status again so the useeffect will run again (so it loops)
    setTimeout(()=>{
      setBoldOne(false);
      setBoldTwo(false);
      setBoldThree(false);
      setBoldStatus(!boldStatus);
    }, 4000)
    
  };

  return (
    <div className="container">
      <header className="header">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>
      <section className="home">
        <h1> Hi, i'm Pauleena! </h1>
        <p> 
          <span style={{ fontWeight: boldOne ? 'bold' : 'normal' }}>Paw</span> -{' '}
          <span style={{ fontWeight: boldTwo ? 'bold' : 'normal' }}>lee</span> -{' '}
          <span style={{ fontWeight: boldThree ? 'bold' : 'normal' }}>nuh</span>
        </p>
      </section>
      <section className="about">
        <div className="aboutContainer">
          <h2> About Me </h2>
          <p> 
            I am currently in my fourth year at California State University, Fullerton, where I 
            am pursuing a degree in computer science. My passion for technology and web development has led me to 
            aspire to become a web developer. Outside of my academic pursuits, I enjoy drawing and watching shows. 
            I am particularly interested in both front-end and back-end development, and I am eager to learn and 
            explore new technologies in the field
          </p>
        </div>
        <img src={profilephoto} alt="pauleena phan"/>
      </section>
      <section className="skills">
        <h2> Skills and Technologies </h2>
        html, css, javascript, react, github, vscode, firebase
      </section>
      <section className="projects">
        <h2> Projects </h2>
        <div className="projectContainer">
          <div className="project">
            <img src={etchasketchproject} alt="etch a sketch project"/>
            <h3> Etch-a-Sketch </h3>
            <p> 
              Etch-a-sketch application that enables users to create drawings. Users have the ability to customize the 
              grid size and choose from a variety of colors to draw with.
            </p>
            <div className="tools">
              <ul>
                <li> HTML </li>
                <li> CSS </li>
                <li> Javascript </li>
              </ul>
            </div>
            <div className="iconContainer">
              <a href="https://github.com/pauleenaphan/Etch-a-Sketch" target="_blank" rel="noopener noreferrer">
                <img src={githubicon} alt="github icon" className="icon" />
              </a>

              <a href="https://pauleenaphan.github.io/Etch-a-Sketch/" target="_blank" rel="noopener noreferrer">
                <img src={livesiteicon} alt="site icon" className="icon" />
              </a>
            </div>
          </div>
          <div className="project"> 
            <img src={todoproject} alt="todo project"/>
            <h3> Things you need TODO </h3>
            <p> 
              This application serves as a todo manager, offering users the ability to create, view, edit, and 
              remove tasks from their list 
            </p>
            <div className="tools">
              <ul>
                <li> HTML </li>
                <li> CSS </li>
                <li> Javascript </li>
                <li> Local storage</li>
              </ul>
            </div>
            <div className="iconContainer">
              <a href="https://github.com/pauleenaphan/todo-project" target="_blank" rel="noopener noreferrer">
                <img src={githubicon} alt="github icon" className="icon"/>
              </a>

              <a href="https://pauleenaphan.github.io/todo-project/dist/" target="_blank" rel="noopener noreferrer">
                <img src={livesiteicon} alt="site icon" className="icon"/>
              </a>
            </div> 
          </div>
          <div className="project">
            <img src={mentalmeproject} alt="mentalme project"/>
            <h3> MentalMe </h3>
            <p> 
              A mobile app that focuses on mental wellness, where users can record their emotions through journaling. 
              Moobie, our friendly beaver bear mascot, accompanies users on their personal journey, providing 
              support and guidance along the way.
            </p>
            <div className="tools">
              <ul>
                <li> React Native </li>
                <li> Expo </li>
                <li> Firebase </li>
              </ul>
            </div>
            <div className="iconContainer">
              <a href="https://github.com/pauleenaphan/MentalMe" target="_blank" rel="noopener noreferrer">
                <img src={githubicon} alt="github icon" className="icon"/>
              </a>

              <a href="<YOUR_LIVE_SITE_URL>" target="_blank" rel="noopener noreferrer">
                <img src={livesiteicon} alt="site icon" className="icon"/>
              </a>
            </div>
          </div>
          <div className="project">
            <img src={weatherproject} href="https://github.com/pauleenaphan/weather-app" alt="weather page screen"/>
            <h3> Weather Watcher </h3>
            <p>
              This weather page enables users to enter a city, after which it displays the current weather conditions for that location. This project uses weather API
            </p>
            <div className="tools">
              <ul>
                <li> HTML </li>
                <li> CSS </li>
                <li> Weather API </li>
              </ul>
            </div>
            <div className="iconContainer">
              <a href="https://github.com/pauleenaphan/weather-app" target="_blank" rel="noopener noreferrer">
                <img src={githubicon} alt="github icon" className="icon"/>
              </a>

              <a href="https://pauleenaphan.github.io/weather-app/" target="_blank" rel="noopener noreferrer">
                <img src={livesiteicon} alt="site icon" className="icon"/>
              </a>
            </div>
          </div>
        </div>
        
      </section>
      <section className="contact">
        <h2> Contact Me </h2>
        <h3> Pauleena2002@gmail.com </h3>
        <p> Have any questions? </p>
        <form>
          <input type="text" placeholder="Email"/>
          <input type="text" placeholder="Subject"/>
          <input type="text" placeholder="Message"/>
          <button> Send </button>
        </form>
      </section>
      
      <section className="footer">
        <img src="" href="https://github.com/pauleenaphan" alt="github icon"/>
        <img src="" href="https://www.linkedin.com/in/pauleena-phan-832a62247/" alt="linkedin icon"/>
      </section>
    </div>
    
  );
}

export default App;
