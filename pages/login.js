import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import InputBox from "../components/InputBox";
import Nav from "../components/Nav";

const Line = styled.div`
  background-color: white;
  height: 5px;
  width: 100%;
  margin-bottom: 42px;
`;
const LoginBlock = styled.div`
  background-color: #ebf8ff;
  color: #0f3f62;
  font-size: 14px;
  width: 100%;

  background-color: #ebf8ff;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  & > button {
    color: white;
    background-color: #4461f2;
    width: 520px;
    height: 50px;
    font-size: 18px;
    border-style: hidden;
    border-radius: 13px;
  }
  .fine {
    display: flex;
    font-weight: bold;
    text-align: center;
    padding: 10px 20px;
    & > a {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .text {
    text-align: left;
    padding: 10px 20px;
    font-size: 36px;
    margin-bottom: 22px;
  }
  .id_remember {
    display: flex;
    margin-bottom: 36px;
  }
  .fine_text {
    margin-right: 3px;
  }
`;
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav></Nav>
      <LoginBlock>
        <div className="text">환영합니다. 로그인을 해주세요.</div>
        <Line></Line>
        <div>
          <InputBox text="아이디" placeholder="아이디를 입력하세요" />
          <InputBox text="비밀번호" placeholder="●●●●●●" />
          <div className="id_remember">
            <input id="remember" type="checkbox"></input>
            <label for="remember">아이디 기억하기</label>
          </div>
        </div>
        <div className="fine">
          <div className="fine_text">아이디나 비밀번호를 잊어버리셨나요?</div>
          <a>아이디, 비밀번호 찾기</a>
        </div>
        <button>로그인</button>
      </LoginBlock>
    </div>
  );
}
