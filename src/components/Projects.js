import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/events.avif";
import projImg2 from "../assets/img/cuisine-ouverte-24.jpg";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "WorkPal",
      description: "Plateforme de gestion des espaces de coworking.",
      imgUrl: projImg1,
    },
    {
      title: "Bati-Cuisine",
      description: "Application pour la gestion des projets de construction et rénovation de cuisines.",
      imgUrl: projImg2,
    },
    {
      title: "Projet AXA",
      description: "Application de gestion et suivi des tâches avec plateforme communautaire interactive.",
      imgUrl: projImg3,
    },
    {
      title: "Gestion des événements",
      description: "Système pour organiser et gérer les événements et inscriptions des participants.",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Voici quelques-uns des projets majeurs que j'ai développés, englobant diverses technologies et objectifs pour répondre à des besoins réels.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tous les projets</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Projets techniques</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Gestion & Organisation</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Les projets techniques incluent WorkPal et Bati-Cuisine, mettant en avant des solutions logicielles robustes pour des besoins spécifiques.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Les projets axés sur la gestion et l'organisation incluent le Projet AXA et la Gestion des événements, conçus pour améliorer la productivité et la communication.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
}
