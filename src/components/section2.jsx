import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import Profile from "../images/profile.jpg";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
const TextSide = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const ImageSide = styled.img`
  display: flex;
  height: 300px;
  width: 300px;
  @media (max-width: 750px) {
    width: 100%;
    height: 400px;
  }
`;
const Name = styled.p`
  font-size: 2rem;
  font-family: Red Hat Display;
  display: flex;
  @media (max-width: 750px) {
    margin: 0 auto;
  }
`;
const TypingText = styled.div`
  display: flex;
  @media (max-width: 750px) {
    margin: 0 auto;
  }
`;
const DetailText = styled.p`
  display: flex;
  flex-wrap: wrap;
`;
export default function Section2() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("ms"));

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {" "}
      <div style={{ height: window.innerHeight - 40 }}>
        <Container>
          <TextSide>
            <Name>Mudasir Pandith</Name>
            <TypingText>
              <TypeWriterEffect
                textStyle={{
                  fontFamily: "Red Hat Display",
                  color: "#3F3D56",
                  fontWeight: 500,
                  fontSize: "1.2em",
                }}
                startDelay={0}
                cursorColor="#3F3D56"
                multiText={[" Freelancer", " Full Stack Developer"]}
                multiTextDelay={2000}
                loop={1}
                typeSpeed={100}
              />
            </TypingText>
            <DetailText>
              I am undergraduate student at NIT Srinagar with Electronics and
              Communication Engineering as my major. I have keen interest in
              technology and try to learn eveyday.
            </DetailText>
            <Button>Resume</Button>
          </TextSide>
          <ImageSide
            onClick={handleClickOpen}
            src={Profile}
            alt="Mudasir Ahmad Pandith"
          />
        </Container>
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <DialogContentText>
            <img
              src={Profile}
              alt="profile"
              style={{
                height: window.innerHeight > 900 ? "auto" : "auto",
                width: window.innerWidth > 500 ? "500px" : "280px",
                margin: "0",
              }}
            />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
