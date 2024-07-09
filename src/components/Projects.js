import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const spotlightProjects = {
      "RefuLink Canada": {
        title: "RefuLink Canada",
        desc:
          "A third-person survival-mode game where you battle against time and space to return to Earth.",
        techStack: "Swift, Firebase",
        link: "https://github.com/shakeb03/RefSupport",
      //   open: "https://gazijarin.itch.io/no-mans-land",
        image: "/assets/refulink3.png"
      } 
    };
    const projects = {
      "Leave Management System (LMS)": {
        desc:
          "An application created for managing leaves for MJCET, with a Node.js back-end, Angular front-end.",
        techStack: "Angular, Node.js, MongoDB",
        link: "https://github.com/shakeb03/Leave-Management-System"
      //   open: "https://tdsb-app.herokuapp.com/"
      },
      "Sarcasm Detection on Twitter Data (Research Project)": {
        desc:
          "An ensemble model to detect sarcasm in tweets. Enhancing the accuracy of the model by 82%.",
        techStack: "Machine Learning Algorithms (Ensemble model), K-fold cross-validation, Python, Twitter API"
      //   link: "https://github.com/gazijarin/adamai",
      //   open: "https://gazijarin.github.io/AdamAI/"
      },
      "SCart": {
        desc:
          "An ecommerce web app with React.js as front-end and Firebase Database as back-end.",
        techStack: "React.js, Firebase",
        link:
          "https://github.com/shakeb03/SCart"
      },
      "RefuLink Canada": {
        desc:
          "A third-person survival-mode game where you battle against time and space to return to Earth.",
        techStack: "Swift, Firebase",
        link: "https://github.com/shakeb03/RefSupport",
      //   open: "https://gazijarin.itch.io/no-mans-land",
        // image: "/assets/refulink3.png"
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
