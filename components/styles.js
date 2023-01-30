import { redirect } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Image from "../img/photo.png";

export const Block = styled.div`
  font-size: 1.5em;
  background-color: rgb(18, 18, 18);
  color: rgb(229, 229, 229);
  width: 450px;
  height: 450px;
  margin: 0px auto;
  padding-top: 40px;
`;
export const BlockUp = styled(Block)`
  height: 520px;
`;

export const Header = styled.div`
  text-align: center;
  width: 60px;
  height: 40px;
  margin: 0px auto;
  padding-top: 20px;
  background-color: rgb(240, 141, 175);
  border-radius: 100%;
`;

export const HeaderImage = styled.div`
  background-image: url(${Image});
  background-repeat: no-repeat;
  width: 60px;
  height: 40px;
  margin-left: 17px;
  padding-top: 20px;
`;
export const Title = styled.div`
  margin-top: 20px;
  text-align: center;
  margin-bottom: 20px;
`;
export const WrapperInput = styled.div`
  display: flex;
  width: 360px;
  margin: 0px auto;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const InputBase = styled.input`
  display: flex;
  height: 40px;
  border-radius: 3px;
  width: 300px;
  background: transparent;
  color: rgb(106, 106, 106);
  padding-left: 5px;
  margin: 0px auto 20px;
  border: 2px solid rgb(106, 106, 106);
  outline: none;
`;

export const InputEmail = styled(InputBase)`
  border-color: ${(props) => {
    if (!props.value) {
      return "rgb(106, 106, 106)";
    }
    return String(props.value).includes("@gmail.com") ? "green" : "red";
  }};
`;
export const InputEmailUp = styled(InputEmail)`
  width: 340px;
`;
export const InputPassword = styled(InputBase)`
  border-color: ${(props) => {
    if (!props.value) {
      return "rgb(106, 106, 106)";
    } else if (props.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)) {
      return "green";
    } else {
      return "red";
    }
  }};
`;

export const InputPasswordUp = styled(InputPassword)`
  width: 340px;
`;
export const InputFirstName = styled(InputBase)`
  margin-bottom: 20px;
  width: 44%;

  border-color: ${(props) => {
    if (!props.value) {
      return "rgb(106, 106, 106)";
    }
    return Number(props.value.length) > 3 ? "green" : "red";
  }};
`;

export const InputLastName = styled(InputFirstName)``;

export const Button = styled.button`
  display: block;
  width: 300px;
  background: rgb(144, 202, 249);
  border-radius: 3px;
  height: 35px;
  margin: 20px auto 0px;
  color: rgb(18, 18, 18);
  cursor: pointer;
  transition: all 0.5s ease 0s;
`;

export const QuestionsUp = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin: 40px auto;
`;
export const Questions = styled(QuestionsUp)`
  width: 300px;
`;

export const One = styled.div`
  color: rgb(144, 202, 249);
  font-size: 10px;
  cursor: pointer;
  margin-top: 0px;
  transition: all 0.3s ease 0s;
`;
export const MyLink = styled(Link)`
  color: rgb(144, 202, 249);
  font-size: 10px;
  cursor: pointer;
  margin-top: 0px;
  transition: all 0.3s ease 0s;
  text-decoration: none;
`;
export const MyLinkUp = styled(MyLink)`
  margin-left: 230px;
`;

export const Footer = styled.div`
  color: rgb(71, 71, 71);
  text-align: center;
  font-size: 12px;
  margin: 75px auto;
`;
