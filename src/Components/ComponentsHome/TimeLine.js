import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { StyledEngineProvider } from "@mui/material/styles";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
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
            <Zoom top>
              <div className="roadmap-container">
                <div>
                  <i class="fas fa-check-square" />
                  <p1 className="text">Wesite Launch</p1>
                </div>
                <div>
                  <i class="fas fa-check-square" />
                  <p1>Develop Contract</p1>
                </div>
                <div>
                  <i class="fas fa-check-square" />
                  <p1>Private Sales</p1>
                </div>
                <div>
                  <i class="fas fa-check-square" />
                  <p1>Marketing strategy</p1>
                </div>
              </div>
            </Zoom>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <p1>Q2 2022</p1>
            <Zoom top>
              <div className="roadmap-container">
                <div>
                  <p1>IDO</p1>
                </div>
                <div>
                  <p1>Design 3D Asset</p1>
                </div>
                <div>
                  <p1>NFT Box</p1>
                </div>
                <div>
                  <p1>Alpha Test</p1>
                </div>
              </div>
            </Zoom>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <p1>Q3 2022</p1>
            <Zoom top>
              <div className="roadmap-container">
              <div>
                  <p1> Lunch Marketplace</p1>
                </div>
                <div>
                  <p1>Develop Game Contract</p1>
                </div>
                <div>
                  <p1>Beta Test</p1>
                </div>
                <div>
                  <p1>Publish game for  PC & Web </p1>
                </div>
              </div>
            </Zoom>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <p1>Q4 2022</p1>
            <Zoom top>
              <div className="roadmap-container">
                <div>
                  <p1>Publish game for IOS & Android</p1>
                </div>
                <div>
                  <p1>PvP Lunch</p1>
                </div>
                <div>
                  <p1>Branding</p1>
                </div>
                <div>
                  <p1>Add New Map</p1>
                </div>
              </div>
            </Zoom>
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
          <Fade top >
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
