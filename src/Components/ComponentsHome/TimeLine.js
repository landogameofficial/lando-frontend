import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { StyledEngineProvider } from "@mui/material/styles";
import Fade from "react-reveal/Fade";
import "./TimeLine.css";
const TimeLine = () => {
  return (
    <div>
      <Timeline position="alternate">
        <TimelineItem className="roadmap">
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            <p1>Q1 2022</p1>
            <Fade right>
              <div className="roadmap-container">
                <div>
                  <i class="fas fa-check-square" />
                  <p1 className="text">Website V1</p1>
                </div>
                <div>
                  <i class="fas fa-check-square" />
                  <p1>Develop Contract</p1>
                </div>
                <div>
                  <i class="fas fa-check-square" />
                  <p1>ICO & IDO</p1>
                </div>
                <div>
                  <p1>Game Beta</p1>
                </div>
              </div>
            </Fade>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <p1>Q2 2022</p1>
            <Fade left>
              <div className="roadmap-container">
                <div>
                  <p1>Mint 3D asset</p1>
                </div>
                <div>
                  <p1>Advertising</p1>
                </div>
                <div>
                  <p1>Game v2</p1>
                </div>
                <div>
                  <p1>NFT market</p1>
                </div>
              </div>
            </Fade>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <p1>Q3 2022</p1>
            <Fade right>
              <div className="roadmap-container">
                <div>
                  <p1>Rebranding</p1>
                </div>
                <div>
                  <p1>Earn NFT in game</p1>
                </div>
                <div>
                  <p1>Add 3D assets in game</p1>
                </div>
                <div>
                  <p1>Tallent for NFT</p1>
                </div>
              </div>
            </Fade>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <p1>Q4 2022</p1>
            <Fade left>
              <div className="roadmap-container">
                <div>
                  <p1>Publish game on IOS & Android</p1>
                </div>
                <div>
                  <p1>Multiply game</p1>
                </div>
                <div>
                  <p1>Earn MEG on game</p1>
                </div>
                <div>
                  <p1>NFT market</p1>
                </div>
              </div>
            </Fade>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

const RoadMap = () => {
  return (
    <>
      <div className="page-roadmap">
        <div className="title-roadmap">
          <Fade top>
            <h1>Roadmap</h1>
          </Fade>
        </div>
        <div>
          <StyledEngineProvider injectFirst>
            <TimeLine />
          </StyledEngineProvider>
        </div>
      </div>
    </>
  );
};
export default RoadMap;
