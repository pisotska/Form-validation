import React from "react";
import { useState } from "react";

import { BlockUp } from "./styles";
import { Header } from "./styles";
import { HeaderImage } from "./styles";
import { Title } from "./styles";
import { WrapperInput } from "./styles";
import { InputFirstName } from "./styles";
import { InputLastName } from "./styles";
import { InputEmailUp } from "./styles";
import { InputPasswordUp } from "./styles";
import { Button } from "./styles";
import { QuestionsUp } from "./styles";
import { MyLinkUp } from "./styles";
import { Footer } from "./styles";

const SignUpForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <BlockUp>
      <Header>
        <HeaderImage></HeaderImage>
      </Header>
      <Title>Sign Up</Title>
      <WrapperInput>
        <InputFirstName
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
        ></InputFirstName>
        <InputLastName
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
        ></InputLastName>
      </WrapperInput>
      <InputEmailUp
        placeholder="Email Adress"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
      <InputPasswordUp
        placeholder="Password"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <Button>SIGN UP</Button>
      <QuestionsUp>
        <MyLinkUp to="/">
          <span>Already have an account? Sign In</span>
        </MyLinkUp>
      </QuestionsUp>
      <Footer>Copyright © Your website 2022</Footer>
    </BlockUp>
  );
};

export default SignUpForm;
