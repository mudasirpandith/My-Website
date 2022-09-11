import React from "react";
import styled from "styled-components";
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
`;
const SmallText = styled.p`
  display: flex;
  color: #aaa8a9;
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
`;
const Button = styled.button`
  display: flex;
  border: none;
  flex: 1;
  padding: 10px 100px ;
  color: white;
  margin: 20px auto;
  background-color: rgb(88, 62, 189);
  margin-bottom: 20px;
  border-radius: 10px;
  cursor: pointer;
`;
export const GetInTouch = () => {
  return (
    <Container>
      <TextSide>
        <Heading>Contact</Heading>
        <LargeText>Get In Touch</LargeText>
        <SmallText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
          voluptates iste nihil minima provident modi aut iusto necessitatibus
          asperiores blanditiis esse nisi, consectetur magnam natus, illum quos
          laboriosam reprehenderit reiciendis.
        </SmallText>
      </TextSide>
      <FormSide>
        <LargeText>Want a collaboration?</LargeText>
        <Form action="#">
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Input type="tel" placeholder="Phone Number" />
          <Input type="text" placeholder="Message" />
          <Button>Submit</Button>
        </Form>
      </FormSide>
    </Container>
  );
};
