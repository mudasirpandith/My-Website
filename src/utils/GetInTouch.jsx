import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
const Container = styled.div`
  display: flex;
  background-color: #f7f7f7;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  color: black;
  padding-top: 30px;
  margin: 10px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const Heading = styled.p`
  color: #aaa8a9;
  margin: 3px 0;
  font-size: 20px;
`;
const LargeText = styled.h1`
  display: flex;
  flex: 4;
  margin: 10px 0;
  color: #525050;
`;
const SmallText = styled.p`
  display: flex;
  color: #aaa8a9;
  line-height: 3ch;
`;
const TextSide = styled.div`
  display: flex;
  margin: auto 0 auto 70px;
  flex: 3;
  flex-direction: column;
  @media (max-width: 500px) {
    margin: 0 20px;
  }
`;
const FormSide = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 5;
  gap: 10px;
  @media (max-width: 500px) {
    padding-bottom: 20px;
  }
`;
const Form = styled.form`
  text-align: center;
  width: 320px;
  border-radius: 10px;
  background-color: white;
`;
const Input = styled.input`
  display: flex;
  padding: 10px;
  height: 30px;
  width: 280px;
  margin: 20px auto;
  border: 1px solid #aaa8a9;
  border-radius: 10px;
`;
const TextArea = styled.textarea`
  display: flex;
  padding: 10px;
  height: 60px;
  width: 280px;
  margin: 20px auto;
  border: 1px solid #aaa8a9;
  border-radius: 10px;
`;
const Button = styled.button`
  display: flex;
  border: none;
  flex: 1;
  padding: 10px 100px;
  color: white;
  margin: 20px auto;
  background-color: ${({ theme }) => theme.bg};
  margin-bottom: 20px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: green;
  }
`;
export const GetInTouch = () => {
  const [open, setOpen] = useState(false);
  const [send, setSend] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setSend(false);
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0mz7d4e",
        "template_9lqekk8",
        form.current,
        "3yCvYpWOA0-N3RzSJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setOpen(true);
        },
        (error) => {
          console.log(error.text);
          window.alert("There was some error");
        }
      );

    e.target.reset();
  };

  return (
    <Container>
      <TextSide>
        <Heading>Contact</Heading>
        <LargeText>Get In Touch</LargeText>
        <SmallText>
        I am dedicated to providing the highest level of service and support to my clients, and I am committed to delivering successful projects on time and within budget. If you have an idea for a web or mobile application and are looking for a skilled and experienced developer to bring it to life, please don't hesitate to contact me. I would be happy to discuss your project in more detail and provide you with a personalized quote. Thank you for considering me for your development needs, and I look forward to the opportunity to work with you.
        </SmallText>
      </TextSide>
      <FormSide>
        <LargeText>Want a collaboration?</LargeText>
        <Form ref={form} onSubmit={sendEmail} className="form" id="myForm">
          <Input required type="text" placeholder="Name" name="name" />
          <Input required type="email" placeholder="Email" name="email" />
          <Input
            required
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
          />
          <TextArea required type="text" placeholder="Message" name="message" />
          <Button type="submit" title="Send Message" onClick={handleClick}>
            Send
          </Button>
          {send && (
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                message sended ✔︎
              </Alert>
            </Snackbar>
          )}
        </Form>
      </FormSide>
    </Container>
  );
};
