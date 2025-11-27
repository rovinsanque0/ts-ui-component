import styled from "styled-components";
import Icon from "../components/Icon/Icon";

import {
  HeroImage,
  Img,
  Label,
  Text,
  Card,
  Button,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableFooter,
} from "../components";

/* ----------- Layout Components ----------- */

const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 40px;

  /* New background */
  background: linear-gradient(135deg, #858586ff, #fcfcfcff);

  /* Helps spacing look cleaner */
  padding-bottom: 60px;
`;

const Section = styled.section`
  width: 100%;
`;

const Grid = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
`;

/** --- adds gradien background to hero image */
const GradientHero = styled.div`
  background: linear-gradient(135deg, #0f172a, #fcfcfcff);
  padding: 10px 10px;
`;

/* ----------- Home Page ----------- */

const Home = () => {
  return (
    <Page>
      <GradientHero>
        <HeroImage image="/images/rrc.jpg">
          <div
            style={{
              textAlign: "center",
              padding: "20px 16px",
              background: "rgba(255,255,255,0.08)",
              borderRadius: "12px",
              backdropFilter: "blur(4px)",
              maxWidth: "420px",
              margin: "0 auto",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <Img
              src="/images/rovin.jpeg"
              alt="Rovin Sanque"
              width="120px"
              style={{
                borderRadius: "50%",
                border: "3px solid #ffffff",
                boxShadow: "0px 3px 15px rgba(0,0,0,0.25)",
                marginBottom: "14px",
              }}
            />

            <p
              style={{
                fontSize: "1.4rem",
                fontWeight: "bold",
                color: "#ffffff",
                margin: "0",
              }}
            >
              Rovin Sanque
            </p>

            <p
              style={{
                fontSize: "0.95rem",
                color: "#cbd5e1",
                marginTop: "4px",
              }}
            >
              Full-Stack Web Development Student • Backend-Focused • Python
              Lover
            </p>

            <p
              style={{
                fontSize: "0.85rem",
                color: "#cbd5e1",
                marginTop: "12px",
                maxWidth: "360px",
                lineHeight: "1.4",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              I am a full-stack development student at Red River College
              Polytechnic. I enjoy backend logic, building practical systems,
              and writing clean, efficient code. Python is my favourite
              language.
            </p>
          </div>
        </HeroImage>
      </GradientHero>

      {/* --- PROJECTS / WORK --- */}
      <Section>
        <Label>Projects</Label>

        <Grid>
          {/* ---- Snipply ---- */}
          <Card title="Snipply">
            <p style={{ fontSize: "1.25rem", color: "#333" }}>Snipply</p>
            <p style={{ fontSize: "1rem", color: "#333" }}>
              A simple video-upload and photo gallery platform where users can
              upload and view media.
            </p>
            <p style={{ fontSize: "0.9rem", color: "#333" }}>
              Tech: React, PHP, XAMPP (MySQL)
            </p>

            <Button
              onClick={() =>
                window.open("https://github.com/rovinsanque0/Snipply")
              }
            >
              View Project
            </Button>
          </Card>

          {/* ---- Pixelforge ---- */}
          <Card title="Pixelforge">
            <p style={{ fontSize: "1.25rem", color: "#333" }}>Pixelforge</p>
            <p style={{ fontSize: "1rem", color: "#333" }}>
              An online store for PC components (WIP). Built for my Ruby on
              Rails course, reflecting my interest in backend frameworks and
              e-commerce systems.
            </p>
            <p style={{ fontSize: "0.9rem", color: "#333" }}>
              Tech: Ruby on Rails
            </p>

            <Button
              onClick={() =>
                window.open("https://github.com/rovinsanque0/pixelforge")
              }
            >
              View Project
            </Button>
          </Card>
        </Grid>
      </Section>

      {/* --- SKILLS --- */}
      <Section>
        <Label>Skills</Label>

        <p style={{ fontSize: "1rem", color: "#333", paddingLeft: "3.5rem" }}>
          These are the technologies I’m confident with and currently expanding:
        </p>

        <Table>
          <TableHeader>
            <TableRow>
              <TableCell header>Category</TableCell>
              <TableCell header>Items</TableCell>
            </TableRow>
          </TableHeader>

          <tbody>
            <TableRow>
              <TableCell>Proficient In</TableCell>
              <TableCell>Python, Java, HTML, SQL, JavaScript</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Currently Advancing</TableCell>
              <TableCell>React/TypeScript, PHP, Ruby on Rails</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Tools & Technologies</TableCell>
              <TableCell>
                XAMPP, Flask, Git & GitHub, SSH, Docker, Husky, Kali Linux
                (basics), DVWA & security labs
              </TableCell>
            </TableRow>
          </tbody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}>End of Skills</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Section>

      {/* --- RESOURCES --- */}
      <Section>
        <Label>Resources I Use</Label>

        <Grid>
          {/* --- Stack Overflow --- */}
          <Card title="Stack Overflow">
            <Icon src="/images/stackoverflow.png" alt="Stack Overflow" />
            <p style={{ fontSize: "1.25rem", color: "#333" }}>Stack Overflow</p>
            <p style={{ fontSize: "1rem", color: "#333" }}>
              My go-to resource for troubleshooting, learning best practices,
              and exploring real-world developer solutions.
            </p>
            <Button
              onClick={() => window.open("https://stackoverflow.com/questions")}
            >
              Visit
            </Button>
          </Card>

          {/* --- Mosh --- */}
          <Card title="Programming With Mosh">
            <Icon src="/images/mosh.jpg" alt="Stack Overflow" />
            <p style={{ fontSize: "1.25rem", color: "#333" }}>
              Programming with Mosh
            </p>
            <p style={{ fontSize: "1rem", color: "#333" }}>
              Clear, practical coding tutorials taught by Mosh Hamedani, a
              software engineer with 20+ years of experience.
            </p>
            <Button
              onClick={() =>
                window.open("https://www.youtube.com/@programmingwithmosh")
              }
            >
              Visit
            </Button>
          </Card>
        </Grid>
      </Section>

      {/* --- DEVELOPER SETUP --- */}
      <Section>
        <Label>Developer Setup</Label>

        <Card title="Developer Setup">
          <p style={{ fontSize: "1.25rem", color: "#333" }}>VSCode Setup</p>
          <p style={{ fontSize: "1rem", color: "#333" }}>
            Visual Studio Code (preferred editor)
            <br />
            Extensions: ESLint, Prettier, VSCode Styled Components, Storybook,
            Jest
          </p>

          <p style={{ fontSize: "1.25rem", color: "#333", marginTop: "14px" }}>
            Terminal / Environment
          </p>
          <p style={{ fontSize: "1rem", color: "#333" }}>
            Node.js + npm, Husky (pre-commit checks), PowerShell, Storybook dev
            server, Jest test runner
          </p>

          <p style={{ fontSize: "1.25rem", color: "#333", marginTop: "14px" }}>
            Editor Font
          </p>
          <p style={{ fontSize: "1rem", color: "#333" }}>
            Consolas, 'Courier New', monospace
          </p>
        </Card>
      </Section>
    </Page>
  );
};

export default Home;
