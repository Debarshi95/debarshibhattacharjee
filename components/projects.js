import React from "react";
import { Typography, Box } from "@material-ui/core";
import Image from "next/image";
import styled from "styled-components";

function Projects() {
  return (
    <Section>
      <Box width="80%" margin="0 auto" padding={"3rem 0"}>
        <SectionTitle align="center">Projects</SectionTitle>
        <Box display="flex" padding={"3rem 0"}>
          <ImgWrapper>
            <Image src="/images/mymovies.png" alt="" layout="fill" />
          </ImgWrapper>
          <div
            style={{
              flex: 1.3,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              padding: "0 2.5rem",
            }}
          >
            <ProjectTitle variant="h4">MyMovies</ProjectTitle>
            <ProjectInfo>
              A React JS project that provides information about latest movies
              and Tv shows. Provides information based on genres, search,
              categories etc.
            </ProjectInfo>
            <Box display="flex">
              <ActionButton
                outlined
                href="https://debarshi-mymovies.netlify.app"
              >
                See Live
              </ActionButton>
              <ActionButton href="https://github.com/Debarshi95/my-movies">
                Source code
              </ActionButton>
            </Box>
          </div>
        </Box>

        <Box display="flex" padding={"2rem 0"}>
          <ImgWrapper>
            <Image src="/images/foodhub.png" alt="" layout="fill" />
          </ImgWrapper>
          <div
            style={{
              flex: 1.3,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              padding: "0 2.5rem",
            }}
          >
            <ProjectTitle variant="h4">Foodhub</ProjectTitle>
            <ProjectInfo>
              A React JS project that allows to search and see different food
              items and cuisines. Implemented using the TypeScript aprroach.
            </ProjectInfo>
            <Box display="flex">
              <ActionButton
                outlined
                href="https://debarshib-foodhub.netlify.app"
              >
                See Live
              </ActionButton>
              <ActionButton href="https://github.com/Debarshi95/FoodHub">
                Source code
              </ActionButton>
            </Box>
          </div>
        </Box>

        <Box display="flex" padding={"2rem 0"}>
          <ImgWrapper>
            <Image src="/images/imagegram.png" alt="" layout="fill" />
          </ImgWrapper>
          <div
            style={{
              flex: 1.3,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              padding: "0 2.5rem",
            }}
          >
            <ProjectTitle variant="h4">ImageGram</ProjectTitle>
            <ProjectInfo>
              A React JS project that provides information about latest movies
              and Tv shows. Provides information based on genres, search,
              categories etc.
            </ProjectInfo>
            <Box display="flex">
              <ActionButton
                outlined
                href="https://debarshib-imagegram.netlify.app"
              >
                See Live
              </ActionButton>
              <ActionButton href="https://github.com/Debarshi95/image-gram">
                Source code
              </ActionButton>
            </Box>
          </div>
        </Box>

        <Box display="flex" padding={"2rem 0"}>
          <ImgWrapper>
            <Image src="/images/letsnote.png" alt="" layout="fill" />
          </ImgWrapper>
          <div
            style={{
              flex: 1.3,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              padding: "0 2.5rem",
            }}
          >
            <ProjectTitle variant="h4">LetsNote</ProjectTitle>
            <ProjectInfo>
              A React JS project that provides information about latest movies
              and Tv shows. Provides information based on genres, search,
              categories etc.
            </ProjectInfo>
            <Box display="flex">
              <ActionButton
                outlined
                href="https://letsnote-debarshib.netlify.app"
              >
                See Live
              </ActionButton>
              <ActionButton href="https://github.com/Debarshi95/letsnote">
                Source code
              </ActionButton>
            </Box>
          </div>
        </Box>

        <Box display="flex" padding={"3rem 0"}>
          <ImgWrapper>
            <Image src="/images/covidtracker.png" alt="" layout="fill" />
          </ImgWrapper>
          <div
            style={{
              flex: 1.3,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              padding: "0 2.5rem",
            }}
          >
            <ProjectTitle variant="h4">Covid 19 Tracker</ProjectTitle>
            <ProjectInfo>
              A React JS project that provides information about latest movies
              and Tv shows. Provides information based on genres, search,
              categories etc.
            </ProjectInfo>
            <Box display="flex">
              <ActionButton
                outlined
                href="https://debarshi95.github.io/covid-19-tracker"
              >
                See Live
              </ActionButton>
              <ActionButton href="https://github.com/Debarshi95/covid-19-tracker">
                Source code
              </ActionButton>
            </Box>
          </div>
        </Box>
      </Box>
    </Section>
  );
}

const Section = styled.section`
  height: auto;
  width: 100%;
`;

const ActionButton = styled.a`
  outline: none;
  padding: 10px 28px;
  background: #fff;
  border: ${(props) =>
    props.outlined ? `3px solid ${props.theme.primary}` : 0};
  font-family: inherit;
  font-size: 1.15rem;
  font-weight: bold;
  color: ${(props) => props.theme.primary || "#000"};
  text-decoration: none;
`;

const ProjectTitle = styled(Typography)`
  font-family: inherit !important;
  font-size: 2rem !important;
  font-weight: 600 !important;
  color: ${(props) => props.theme.textPrimary || "#000"};
`;
const ProjectInfo = styled(Typography)`
  font-family: inherit !important;
  font-size: 1.25rem !important;
  font-weight: 200 !important;
  margin: 2rem 0 !important;
`;

const SectionTitle = styled(Typography)`
  font-family: inherit !important;
  font-size: 3rem !important;
  font-weight: 900 !important;
  text-transform: uppercase;
  color: ${(props) => props.theme.textPrimary || "#000"};
`;

const ImgWrapper = styled.div`
  box-shadow: 0 6px 10px rgb(0 0 0 / 8%), 0 0 6px rgb(0 0 0 / 5%);
  flex: 2;
  position: relative;
  height: 400px;
`;
export default Projects;
