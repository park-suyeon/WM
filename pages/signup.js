import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
const LoginBlock = styled.div`
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  padding: 50px;
  .header {
    display: flex;
    justify-content: space-between;
  }
  .nav {
    display: flex;
  }
  .account {
    display: flex;
    & > div {
      padding: 10px 20px;
    }
  }
  .link {
    padding: 10px 20px;
  }
  .membership {
    background-color: white;
    color: blue;
    border-radius: 30px;
    cursor: pointer;
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
      <LoginBlock>
        <div className="header">
          <div className="nav">
            <div className="link">홈</div>
            <div className="link">지도</div>
            <div className="link">게시판</div>
          </div>
          <div className="account">
            <div>한국어</div>
            <div>로그인</div>
            <div className="membership">회원가입</div>
          </div>
        </div>
        <div>회원가입 페이지입니다</div>
        <div>주소</div>
      </LoginBlock>
    </div>
  );
}
