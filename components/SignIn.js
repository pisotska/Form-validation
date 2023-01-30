import React, { useState } from "react";

import { Block } from "./styles";
import { Header } from "./styles";
import { HeaderImage } from "./styles";
import { Title } from "./styles";
import { InputEmail } from "./styles";
import { InputPassword } from "./styles";
import { Button } from "./styles";
import { Questions } from "./styles";
import { One } from "./styles";
import { MyLink } from "./styles";
import { Footer } from "./styles";

const SignInForm = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  //isError = "Wrong email"
  return (
    <Block>
      <Header>
        <HeaderImage></HeaderImage>
      </Header>
      <Title>Sign In</Title>
      <InputEmail
        // className={classNames("input", isError && "error-class")}
        placeholder="Email Adress"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      ></InputEmail>
      {
        //isError && <div style={{color: red}}>{isError}</div>
      }

      <InputPassword
        placeholder="Password"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      ></InputPassword>
      <Button>SIGN IN</Button>
      <Questions>
        <One>Forgot password</One>
        <MyLink to="/register">
          <span>Don't have an account? Sign Up</span>
        </MyLink>
      </Questions>
      <Footer>Copyright © Your website 2022</Footer>
    </Block>
  );
};

export default SignInForm;
