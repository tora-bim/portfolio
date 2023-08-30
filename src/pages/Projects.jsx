import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import coderdojo from "../assets/projects/coderdojo.jpg";
import nhk from "../assets/projects/nhk.png";
import AKOH_NEXUS from "../assets/projects/AKOH_NEXUS.png";
import seccamp from "../assets/projects/seccamp.png";
import SC from "../assets/projects/SC.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AKOH_NEXUS}
              title="Akoh Nexus HP"
              description="This is first time of making Web site for other people. It is hard, but fun. It is build by nocode tool, Mamewaza. Mamewaza is easy to use, and useful, and I did SEO for this site. Now, if we search 'Akoh gilrs baseball' on Google, this site will get first prize in the few row."
              demoLink="https://akoh-nexus.1web.jp/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nhk}
              title="Speak about SozanLiberalArts on NHK"
              description="I told about presentation in my scholl, the SozanLiberalArts. This event is run entirely by students, and all planning, preparation, and advertising is done by students. The event was picked up by NHK (Japan Broadcasting Corporation) and was broadcast on NHK Okayama and reported online."
              blogLink="https://www3.nhk.or.jp/lnews/okayama/20221111/4020014715.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SC}
              title="Get prize of ChugokuBank in ScienceCastle'22"
              description='At the Science Castle 2022 Chugoku-Shikoku Conference, the Chugoku Bank Prize was awarded for the paper entitled "Improving Quality of Life and Changing Students Interests through App Development". We received a lot of advice from experts in a wide range of fields, which was very stimulating and motivating for the future.'
              blogLink="https://lne.st/2022/12/15/sc_chuushikoku/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coderdojo}
              isBlog={false}
              title="Join coderdojo Okayama as a menter"
              description="I participated in coderdojo Kibi-okayama, an event to teach programming to children, as a mentor. It was very inspiring to see the enthusiasm and interest of young children in programming right in front of my eyes. I would like to use this as my motivation for the future."
              ghLink="https://note.com/tora_bim/n/ndf5047b8a837"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={seccamp}
              isBlog={false}
              title="join the SecurityCamp'23"
              description="I attended Security Camp 2023. It was held in Tokyo for 5 days. We received lectures on cyber security from people working on the front lines of cyber security. It was very interesting and I gained in-depth knowledge and many connections."
              blogLink="https://note.com/tora_bim/n/n9c71b5b2f3c8"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  )
}

export default Projects