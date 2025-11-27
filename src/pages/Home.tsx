import React from "react";
import { Page } from "../layout/Page";
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
    <Page>
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
            I build modern web applications using React, TypeScript, Rails,
            Docker, and more.
          </Text>
        </div>
      </HeroImage>

      {/* --- Projects Section --- */}
      <section>
        <Label>Projects</Label>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {/* ... your card components ... */}
        </div>
      </section>

      {/* --- Skills Section --- */}
      <section>
        <Label>Skills</Label>
        <Text>I work across the full stack:</Text>
        <Table>{/* ... your rows ... */}</Table>
      </section>

      {/* --- Resources Section --- */}
      <section>
        <Label>Resources</Label>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {/* ... resource cards ... */}
        </div>
      </section>

      {/* --- Developer Setup Section --- */}
      <section>
        <Label>Developer Setup</Label>
        <Card>{/* ... setup content ... */}</Card>
      </section>
    </Page>
  );
};

export default Home;
