import React from "react";
import {
  HeroImage,
  Img,
  Text,
  Label,
  Button,
  Card,
  Table,
  TableHeader,
  TableRow,
  TableCell,
} from "../components";


const Home = () => {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "40px" }}>
      

      <HeroImage image="/images/profile-banner.jpg">
        <div style={{ textAlign: "center", padding: "40px" }}>
          <Img
            src="/images/profile.jpg"
            alt="Profile"
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              border: "4px solid white",
              marginBottom: "16px",
            }}
          />
          <Text size="xl">Rovin Sanque</Text>
          <Text size="md">Full-Stack Developer • React • Rails • Security</Text>
          <Text size="sm">
            I build modern web applications using React, TypeScript, Rails, Docker, and more.
          </Text>
        </div>
      </HeroImage>


      <section>
        <Label>Projects</Label>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          
          <Card>
            <Img src="/images/ui-library.png" alt="UI Library" />
            <Text size="lg">UI Component Library</Text>
            <Text>A reusable React + TypeScript component system.</Text>
            <Button onClick={() => window.open("https://github.com/yourrepo")}>
              View Project
            </Button>
          </Card>

          <Card>
            <Img src="/images/ecommerce.png" alt="E-commerce Store" />
            <Text size="lg">Rails E-Commerce Store</Text>
            <Text>Full store with authentication, cart, and admin dashboard.</Text>
            <Button onClick={() => window.open("https://github.com/yourrepo")}>
              View Project
            </Button>
          </Card>

          <Card>
            <Img src="/images/snipply.png" alt="Snipply CMS" />
            <Text size="lg">Snipply CMS</Text>
            <Text>React frontend + PHP API backend content management system.</Text>
            <Button onClick={() => window.open("https://github.com/yourrepo")}>
              View Project
            </Button>
          </Card>

        </div>
      </section>


      <section>
        <Label>Skills</Label>
        <Text>I work across the full stack:</Text>

        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>Items</TableCell>
            </TableRow>
          </TableHeader>

          <TableRow>
            <TableCell>Languages</TableCell>
            <TableCell>JavaScript, TypeScript, Ruby, PHP</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Frameworks</TableCell>
            <TableCell>React, Rails, Express, Node.js</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Tools</TableCell>
            <TableCell>Git, Docker, Linux, Storybook, Vite</TableCell>
          </TableRow>
        </Table>
      </section>


      <section>
        <Label>Resources</Label>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Card>
            <Img src="/icons/react.svg" alt="React Docs" style={{ width: "50px" }} />
            <Text size="lg">React Docs</Text>
            <Text>The official documentation for everything React.</Text>
            <Button onClick={() => window.open("https://react.dev")}>
              Visit
            </Button>
          </Card>

          <Card>
            <Img src="/icons/rails.svg" alt="Rails Guides" style={{ width: "50px" }} />
            <Text size="lg">Rails Guides</Text>
            <Text>Learn Ruby on Rails through the official guides.</Text>
            <Button onClick={() => window.open("https://guides.rubyonrails.org")}>
              Visit
            </Button>
          </Card>

          <Card>
            <Img src="/icons/mdn.svg" alt="MDN Docs" style={{ width: "50px" }} />
            <Text size="lg">MDN Web Docs</Text>
            <Text>The best resource for JavaScript and browser APIs.</Text>
            <Button onClick={() => window.open("https://developer.mozilla.org")}>
              Visit
            </Button>
          </Card>
        </div>
      </section>

      {/* ========================= */}
      {/* DEVELOPER SETUP SECTION */}
      {/* ========================= */}
      <section>
        <Label>Developer Setup</Label>

        <Card>
          <Text size="lg">VSCode Extensions</Text>
          <Text>ESLint, Prettier, GitLens, Material Icon Theme, Tailwind IntelliSense</Text>

          <Text size="lg" style={{ marginTop: "14px" }}>
            Terminal Setup
          </Text>
          <Text>WSL Ubuntu, Windows Terminal, Oh-My-Posh</Text>

          <Text size="lg" style={{ marginTop: "14px" }}>
            Editor Font
          </Text>
          <Text>JetBrains Mono</Text>
        </Card>
      </section>
    </div>
  );
};

export default Home;
