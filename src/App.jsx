import LogoBlack from './res/LogoBlack.svg';
import Attach from './res/Attached.svg';
import "./res/scss/App.scss";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <img src={require("./res/LogoWhite.svg").default} alt="Moaaz.dev" />
        <div className="wraap">
          <ul>
            <li>Objective</li>
            <li>Services</li>
            <li>Works</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
          <ul>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Behance</li>
          </ul>
        </div>
        <button>
          <img src={require("./res/Menu.svg").default} alt="Menu" />
        </button>
      </div>


      <section className="hero">
        <span className="header">
          Independant front-end web <br /> developer based in egypt
        </span>
        <div className="wrap">
          <span className="">Creating stunning minimal designs with an eye for details and a passion for <br /> delivering exceptional user experiences,
            My objective is to bring simplicity and <br /> elegance to every project, crafting intuitive interfaces that engage and delight <br /> users</span>
          <button>
            <span className="">My Ruseme</span>
            <img src={require("./res/Attached.svg").default} />
          </button>
        </div>
      </section>

      <section className="works">

        <div className="menu">
          <span className="">Selected Works</span>
          <ul className="">
            <li className="">All Projects</li><span>/</span>
            <li className="">Front-end</li><span>/</span>
            <li className="">UIUX</li>
          </ul>
        </div>

        <ul className="list">

          <li className=""><span className="">1.</span>
            <span className="">Real Estate Website Revamp</span>
            <span className="">UI/UX Design</span>
            <span className="">July 2023 - September 2023</span>
          </li>
          <hr />
          <li className="">
            <span className="">2.</span>
            <span className="">Real Estate Website Revamp</span>
            <span className="">UI/UX Design</span>
            <span className="">July 2023 - September 2023</span>
          </li>
          <hr />
          <li className="">
            <span className="">3.</span>
            <span className="">Real Estate Website Revamp</span>
            <span className="">UI/UX Design</span>
            <span className="">July 2023 - September 2023</span>
          </li>

        </ul>
      </section>

      <section className="talk">
        <div>
          <span className="">My structured web development process includes discovery, planning, design, development, testing, launch, and maintenance.
            I prioritize keeping my clients informed and involved to deliver a high-quality websites that reflects their brand and helps their business
            to thrive online</span>
        </div>
      </section>
      <div className="footer">

        <div className="">
          <img className="" />
        </div>

        <div className="">
          <span className="">I would like to hear something from you.</span>
          <div className="">
            <span className="">feel free to reach ou  if you want to collaborate with me, or just have a chat</span>
            <span className="e422_2042">moaz.dev@yahoo.com</span>
          </div>
        </div>
        <div className="">
          <span className="">Sections</span>
          <div className="">
            <span className="">How i'm skilled</span>
            <span className="">Selected Works</span>
          </div>
        </div>
        <div className="">
          <span className="">Follow Me</span>
          <div className="">
            <span className="">In</span>
            <span className="">Be</span>
            <span className="">Dr</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
