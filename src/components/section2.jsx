import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import Profile from "../images/profile.jpg";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 20px;
  @media (max-width: 500px) {
    flex-direction: column;
    margin: 0 auto;
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
`;
const Name = styled.p`
  font-size: 2rem;
  font-family: Red Hat Display;
  display: flex;
`;
const TypingText = styled.div`
  display: flex;
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
      <Container>
        <TextSide>
          <Name>Mudasir Pandith</Name>
          <TypingText>
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Red Hat Display",
                color: "#3F3D56",
                fontWeight: 500,
                fontSize: "2em",
              }}
              startDelay={0}
              cursorColor="#3F3D56"
              multiText={[" Full Stack Developer", " Freelancer"]}
              multiTextDelay={1000}
              loop={true}
              typeSpeed={40}
            />
          </TypingText>
          <DetailText>
            I am undergraduate student at NIT Srinagar with Electronics and
            Communication Engineering as my major. I have keen interest in
            technology and try to learn eveyday.
          </DetailText>
          <Button>Resume</Button>
        
        </TextSide>
        <ImageSide onClick={handleClickOpen} src={Profile} alt="Profile" />
      </Container>

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
        <DialogActions>
          <Button
            style={{ position: "absolute", bottom: "0" }}
            onClick={handleClose}
            autoFocus
          ></Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
