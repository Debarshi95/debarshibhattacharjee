import Head from "next/head";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import styled, { ThemeContext } from "styled-components";
import Projects from "../components/projects";
import { Box, Typography } from "@material-ui/core";

export default function Home() {
  const theme = React.useContext(ThemeContext);
  return (
    <>
      <Head>
        <title>Debarshi B|Web Developer</title>
      </Head>
      <div>
        <Section height="100vh" display="flex">
          <Box width="85%">
            <HeroTitle>
              Hi, I'm{" "}
              <span style={{ color: "#d31027" }}>Debarshi Bhattacharjee!</span>
            </HeroTitle>
            <HeroShortTitle>
              I make things using JavaScript & React
            </HeroShortTitle>
            <Button
              margin={"2rem 0"}
              href="#about"
              fontSize="1.35rem"
              outlined
              borderWidth="4px"
              color={theme.primary}
            >
              Know More
            </Button>
          </Box>
        </Section>

        <Section
          height="680px"
          background="linear-gradient(to top, #d31027, #ea384d)"
          display="flex"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)",
          }}
          id="about"
        >
          <Box width="75%" height="75%">
            <StyledTypography
              variant="h3"
              align="center"
              fontSize="3.25rem"
              fontWeight="bold"
              uppercase
            >
              About Me
            </StyledTypography>
            <div
              style={{
                display: "flex",
                margin: "2.5rem 0",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Box
                borderRadius="50%"
                overflow="hidden"
                width={360}
                height={340}
                position="relative"
              >
                <Image src="/images/me.png" layout="fill" />
              </Box>
              <Box width={600}>
                <StyledTypography varaint="h5">
                  I'm Debarshi, an aspiring Frontend Developer. I specialize in
                  Front-end technologies. I blog my learnings sometimes.
                </StyledTypography>
                <Button
                  margin={"1.5rem 0"}
                  outlined
                  borderColor={theme.textPrimary}
                >
                  View Resume
                </Button>
              </Box>
            </div>
          </Box>
        </Section>

        <Projects />

        <Section
          height="620px"
          display="flex"
          style={{
            clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 100%)",
          }}
          background="linear-gradient(to top, #d31027, #ea384d)"
        >
          <Box
            width="30%"
            height="70%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <StyledTypography
              variant="h3"
              align="center"
              fontSize="3.25rem"
              fontWeight="bold"
              uppercase
            >
              Contact
            </StyledTypography>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Input type="text" name="name" placeholder="Name" />
              <Input type="email" name="email" placeholder="Email" />
              <TextArea type="text" placeholder="Your message.."></TextArea>
              <Button
                margin={"1rem 0"}
                borderRadius="6px"
                borderColor={theme.textSecondary}
                color={theme.textSecondary}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Section>
        <Section height="400px" background="#000">
          hhh
        </Section>
      </div>
    </>
  );
}

const Section = styled.section`
  height: ${(props) => props.height || "300px"};
  background: ${(props) => props.background || "#fff"};
  width: 100%;
  display: ${(props) => props.display || "block"};
  align-items: center;
  justify-content: center;
`;
const TextArea = styled.textarea`
  font-family: inherit;
  resize: none;
  outline: none;
  padding: 12px 14px;
  margin: 10px 0;
  border-radius: 6px;
  min-height: 90px;
  font-size: 1rem;
  border: 0;
`;
const Input = styled.input`
  outline: none;
  padding: 12px 14px;
  margin: 10px 0;
  border-radius: 6px;
  font-size: 1rem;
  border: 0;
  font-family: inherit;
`;

const HeroTitle = styled.h1`
  font-family: inherit;
  font-size: 68px;
  font-weight: 900;
  margin: 4px 0;
`;

const HeroShortTitle = styled.h4`
  font-family: inherit;
  font-size: 36px;
  font-weight: 600;
  margin: 4px 0;
`;
const Button = styled.a(
  (props) => `
  border-color:${props.borderColor || props.theme.primary};
  border-width:${props.borderWidth || "3px"};
  border-style:solid;
  padding: 12px 28px;
  min-width: 82px;
  font-size: ${props.fontSize || "1rem"};
  font-family: inherit;
  font-weight: bold;
  margin: ${props.margin || 0};
  cursor: pointer;
  text-decoration: none;
  display:inline-block;
  color: ${props.color || props.theme.textPrimary};
  background:${props.primary ?? "initial"};
  border-radius:${props.borderRadius || 0};
  text-align:center;
  `
);

const StyledTypography = styled(Typography)`
  font-family: inherit !important;
  font-size: ${(props) => props.fontSize || "1.25rem"} !important;
  font-weight: ${(props) => props.fontWeight || "initial"} !important;
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "initial")};
  color: ${(props) => props.theme.textPrimary || "#000"};
`;
