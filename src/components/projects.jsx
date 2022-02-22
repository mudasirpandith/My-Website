import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function Projects() {
  return (
    <>
      <div className="project-box">
        <h1>Projects</h1>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h1>Leaders</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, sequi sed facilis consectetur modi eaque nostrum
                voluptatem a alias quod doloremque, vero sint ab consequuntur
                amet perspiciatis sapiente, exercitationem dicta.
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="success" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h1>Kaeshir Dictionary</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                unde accusantium nobis dolorem hic! Beatae quia cupiditate,
                doloribus nisi consectetur adipisci rem enim. Quas repellendus
                ut laborum nulla sunt. Dicta.
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h1>Translator</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                unde accusantium nobis dolorem hic! Beatae quia cupiditate,
                doloribus nisi consectetur adipisci rem enim. Quas repellendus
                ut laborum nulla sunt. Dicta.
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="success" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h1>Kaeshir Dictionary</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                unde accusantium nobis dolorem hic! Beatae quia cupiditate,
                doloribus nisi consectetur adipisci rem enim. Quas repellendus
                ut laborum nulla sunt. Dicta.
              </p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  );
}
