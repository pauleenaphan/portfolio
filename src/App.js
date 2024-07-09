import './App.css';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

import profilephoto from './imgs/profilephoto.jpg';
import cherryflower from './imgs/cherryflower.gif';
import cherrytree from './imgs/cherrytree.gif';
import peachgif from './imgs/peachgif.gif';

//project pictures
import weatherproject from './imgs/projects/weatherproject.png';
import mentalmeproject from './imgs/projects/mentalmeproject.png';
import todoproject from './imgs/projects/todoproject.png';
import cattagramproject from './imgs/projects/cattagramproject.png';
import blogproject from './imgs/projects/blogproject.png';
import membersproject from './imgs/projects/membersonlyproject.png';
import etchasketchproject from './imgs/projects/etchasketchproject.png';

//icons
import githubicon from './imgs/icons/githubicon.png';
import livesiteicon from './imgs/icons/livesiteicon.jpg';
import linkedinicon from './imgs/icons/linkedinicon.png';

//svg icons
import htmlicon from './imgs/icons/htmlicon.svg';
import cssicon from './imgs/icons/cssicon.svg';
import jsicon from './imgs/icons/jsicon.svg';
import reacticon from './imgs/icons/reacticon.svg';
import firebaseicon from './imgs/icons/firebaseicon.svg';
import vscodeicon from './imgs/icons/vscodeicon.svg';
import giticon from './imgs/icons/giticon.svg';
import mongodbicon from './imgs/icons/mongodbicon.svg';
import nodejsicon from './imgs/icons/nodejsicon.svg';

import mailbox from './imgs/mailbox.jpg';

function App() {
  //used for the bold pronounciation 
  const [boldOne, setBoldOne] = useState(false);
  const [boldTwo, setBoldTwo] = useState(false);
  const [boldThree, setBoldThree] = useState(false);
  const [boldStatus, setBoldStatus] = useState(true);

  //used for msg has been sent popup
  const [isMsgVisible, setMsgVisible] = useState(false);

  //usestate for the form data that anyone can send or submit to my email
  const [formData, setFormData] = useState({
    userEmail: " ",
    userSubject: " ",
    userMessage: " "
  });

  //updates the form data values 
  const updateFormData = (field, value) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  //references used to scroll to our pages
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  //scrolls to the page that is being clicked on
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({behavior: 'smooth'});
  };

  const templateParams = {
    to_name: 'Pauleena Phan',
    from_name: formData.userEmail,
    subject: formData.userSubject,
    message: formData.userMessage,
  };

  const sendMail = (event)=>{
    event.preventDefault();

    emailjs
    .send('service_em6ucna', 'template_me2o659', templateParams,{
      publicKey: 'r9VwP9XosCGtJF8J5',
    })
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (err) => {
        console.log('FAILED...', err);
      },
    );
    setMsgVisible(true);

    //reset the text the user entered in the form
    event.target.reset();
  }

  //used to create the bold animation 
  useEffect(() => {
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
      }, 4000);
    };
    setBoldTimers();
  
    //clears timer to prevent memory leaves and unwanted state updates
    return () => {
      clearTimeout(setBoldTimers);
    };
  }, [boldStatus]);

  //when the user submits the contact form this will popup the msg for 5 seconds
  useEffect(() => {
    if (isMsgVisible){
      const timer = setTimeout(() => {
        setMsgVisible(false);
      }, 5000);
  
      return () => clearTimeout(timer);
    }
  }, [isMsgVisible]);
  

  return (
    <div className="container">
      <nav className="navBar">
        <ul>
          <li><button onClick={() => scrollToRef(homeRef)}>Home</button></li>
          <li><button onClick={() => scrollToRef(aboutRef)}>About</button></li>
          <li><button onClick={() => scrollToRef(skillsRef)}>Skills</button></li>
          <li><button onClick={() => scrollToRef(projectsRef)}>Projects</button></li>
          <li><button onClick={() => scrollToRef(contactRef)}>Contact</button></li>
        </ul>
      </nav>
      <section ref={homeRef} className="home">
        <div className="headerContainer">
          <h1> Hi, i'm Pauleena! </h1>
          <p> 
            <span style={{ fontWeight: boldOne ? 'bold' : 'normal' }}>Paw</span> -{' '}
            <span style={{ fontWeight: boldTwo ? 'bold' : 'normal' }}>lee</span> -{' '}
            <span style={{ fontWeight: boldThree ? 'bold' : 'normal' }}>nuh</span>
          </p>
        </div>
        <img className="cherryTree" src={cherrytree} alt="cherry tree"/>
      </section>
      <section ref={aboutRef} className="about">
        <div className="aboutContainer">
          <h2> About Me </h2>
          <p> 
            Hi! I graduated from CSUF with a computer science degree in May 2024. My passion for technology and web development has led me to 
            aspire to become a web developer. Outside of my academic pursuits, I enjoy drawing and watching shows. 
            I am particularly interested in both front-end and back-end development, and I am eager to learn and 
            explore new technologies in the field.
          </p>
          <img className="cherryFlower1" src={cherryflower} alt="cherry flower"/>
          <img className="cherryFlower4" src={cherryflower} alt="cherry flower"/>
        </div>
        <div className="imgContainer">
          <img className="profilePic" src={profilephoto} alt="pauleena phan"/>
          <img className="cherryFlower2" src={cherryflower} alt="cherry flower"/>
          <img className="cherryFlower3" src={cherryflower} alt="cherry flower"/>
        </div>
      </section>
      <section ref={skillsRef} className="skills">
        <h2> Skills and Technologies </h2>
        <div className="icons">
          <div className="iconContainer">
            <img src={htmlicon} alt="html icon"/>
            <p> HTML </p>
          </div>
          <div className="iconContainer">
            <img src={cssicon} alt="css icon"/>
            <p> CSS </p>
          </div>
          <div className="iconContainer">
            <img src={jsicon} alt="js icon"/>
            <p> Javascript </p>
          </div>
          <div className="iconContainer">
            <img src={reacticon} alt="react icon"/>
            <p> React </p>
          </div>
          <div className="iconContainer">
            <img src={nodejsicon} alt="nodejs icon"/>
            <p> Node.js </p>
          </div>
          <div className="iconContainer">
            <img src={firebaseicon} alt="firebase icon"/>
            <p> Firebase </p>
          </div>
          <div className="iconContainer">
            <img src={mongodbicon} alt="mongodb icon"/>
            <p> MongoDB </p>
          </div>
          <div className="iconContainer">
            <img src={giticon} alt="github icon"/>
            <p> Git </p>
          </div>
          <div className="iconContainer">
            <img src={vscodeicon} alt="vscode icon"/>
            <p> Visual Studio </p>
          </div>
        </div>
      </section>
      <section ref={projectsRef} className="projects">
        <div className="headerContainer">
          <h2> Projects </h2>
          <img src={peachgif} alt="peachgif"/>
        </div>
        <div className="projectContainer">
          <div className="project"> 
            <img src={blogproject} alt="blog project"/>
            <div>
              <h3> BlogWog </h3>
              <p> 
                A blog website where users can browse various posts. Registered users can log in to leave comments on the post.
              </p>
              <div className="tools">
                <ul>
                  <li> Express.js </li>
                  <li> React </li>
                  <li> CSS </li>
                  <li> MongoDB </li>
                </ul>
              </div>
              <div className="iconContainer">
                <a href="https://github.com/pauleenaphan/blog-api/tree/main" target="_blank" rel="noopener noreferrer">
                  <img src={githubicon} alt="github icon" className="icon"/>
                </a>
                <a href="https://pauleenaphan.github.io/todo-project/dist/" target="_blank" rel="noopener noreferrer">
                  <img src={livesiteicon} alt="site icon" className="icon"/>
                </a>
              </div> 
            </div>
          </div>
          <div className="project">
            <img src={membersproject} alt="members only project"/>
            <div>
              <h3> MembersOnly </h3>
                <p>
                  A message board where any users can send a message to the board. Only members can see the author of the message and
                  when they posted.
                </p>
                <div className="tools">
                    <ul>
                      <li> Express.js </li>
                      <li> Jade </li>
                      <li> MongoDB </li>
                    </ul>
                </div>
                <div className="iconContainer">
                  <a href="https://github.com/pauleenaphan/members-only">
                    <img src={githubicon} alt="github icon" className="icon"/>
                  </a>
                  <a href="https://memberss-only.glitch.me/" target="_blank" rel="noopener noreferrer">
                    <img src={livesiteicon} alt="site icon" className="icon"/>
                  </a>
                </div>
            </div>
          </div>
          <div className="project">
            <img src={cattagramproject} alt="cattagram logo"/>
            <h3> Cattagram </h3>
            <p> 
              Cattagram is a social media web app that revolves around cats. Users can post pictures of their cats
              and add other users as friends. 
            </p>
            <div className="tools">
              <ul>
                <li> HTML </li>
                <li> CSS </li>
                <li> Javascript </li>
                <li> React </li>
                <li> Firebase </li>
              </ul>
            </div>
            <div className="iconContainer">
              <a href="https://github.com/pauleenaphan/Cattagram" target="_blank" rel="noopener noreferrer">
                <img src={githubicon} alt="github icon" className="icon" />
              </a>
              <a href="https://6668d4121f472c000763364f--cattagram.netlify.app" target="_blank" rel="noopener noreferrer">
                <img src={livesiteicon} alt="site icon" className="icon" />
              </a>
            </div>
          </div>
          <div className="project">
            <img src={mentalmeproject} alt="mentalme project"/>
            <h3> MentalMe </h3>
            <p> 
              A mental wellness mobile app where users journal their emotions.
              Moobie, our mascot, supports and guides users on their journey
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
              {/* <a href="<YOUR_LIVE_SITE_URL>" target="_blank" rel="noopener noreferrer">
                <img src={livesiteicon} alt="site icon" className="icon"/>
              </a> */}
            </div>
          </div>
          <div className="project">
            <img src={weatherproject} alt="weather page screen"/>
            <h3> Weather Watcher </h3>
            <p>
              This weather page enables users to enter a city, after which it displays the current weather conditions for that location. 
              This project uses weather API.
            </p>
            <div className="tools">
              <ul>
                <li> HTML </li>
                <li> Tailwind CSS </li>
                <li> Weather API </li>
                <li> Javascript </li>
              </ul>
            </div>
            <div className="iconContainer">
              <a href="https://github.com/pauleenaphan/weather-app" target="_blank" rel="noopener noreferrer">
                <img src={githubicon} alt="github icon" className="icon"/>
              </a>
              <a href="https://pauleenaphan.github.io/weather-app/src/index.html" target="_blank" rel="noopener noreferrer">
                <img src={livesiteicon} alt="site icon" className="icon"/>
              </a>
            </div>
          </div>
          <div className="project">
            <img src={etchasketchproject} alt="Etch a Sketch"/>
            <h3> Etch-a-Sketch </h3>
            <p>
              Etch-a-Sketch app where users can draw on a resizeable grid choosing different colors
            </p>
            <div className="tools">
              <ul>
                <li> HTML </li>
                <li> Javascript </li>
                <li> CSS </li>
              </ul>
            </div>
            <div className="iconContainer">
              <a href="https://github.com/pauleenaphan/Etch-a-Sketch?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">
                <img src={githubicon} alt="github icon" className="icon"/>
              </a>
              <a href="https://pauleenaphan.github.io/Etch-a-Sketch/" target="_blank" rel="noopener noreferrer">
                <img src={livesiteicon} alt="site icon" className="icon"/>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section ref={contactRef} className="contact">
        <div className="contactContainer">
          <h2> Contact Me </h2>
          <div className="headContainer"> 
            <div>
              <h3> Pauleena2002@gmail.com </h3>
              <p> Want to reach me? </p>
            </div>
            <div className="icons">
              <a href="https://github.com/pauleenaphan">
                <img src={githubicon} alt="github icon" className="infoGithubIcon" />
              </a>
              <a href="https://www.linkedin.com/in/pauleena-phan-832a62247/">
                <img src={linkedinicon} alt="linkedin icon" className="infoLinkedinIcon" />
              </a>
            </div>
          </div>
          <form onSubmit={sendMail}>
            <div className="formHeaderContainer">
              <input type="text" placeholder="Email" className="emailInput" onChange={(event) => updateFormData("userEmail", event.target.value)}/>
              <input type="text" placeholder="Subject" className="subjectInput" onChange={(event) => updateFormData("userSubject", event.target.value)}/>
            </div>
            <textarea
              placeholder="Message"
              className="msgInput"
              rows="10"
              onChange={(event) => updateFormData("userMessage", event.target.value)}
            ></textarea>
            <div className="btnContainer">
              <button className="formBtn"> Send </button>
              {isMsgVisible && <p className="msg"> Message has been sent! </p>}
            </div>
            
          </form>
        </div>
        <img src={mailbox} alt="pink mailbox" className="mailboxPhoto"/>
      </section>
      <section className="footer">
        <p> Copyright @ Pauleena Phan 2024</p>
        <a href="https://github.com/pauleenaphan/portfolio" target="_blank" rel="noopener noreferrer">
          <img src={githubicon} alt="github icon" className="icon"/>
        </a>
      </section>
    </div> 
  );
}

export default App;
