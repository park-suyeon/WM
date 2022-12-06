import styled from "styled-components";
import Link from "next/link";
const LoginBox = styled.div`
  .iconWrapper {
    width: 55px;
    height: 55px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    align-items: center;
    margin: 5px;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    .icon {
      width: 26px;
      margin: 4px;
    }
    .text {
      font-size: 9px;
      color: #666666;
    }
  }
`;

export default function LoginButton() {
  return (
    <LoginBox>
      <Link href="/login">
        <div className="iconWrapper" href="/login.js">
          <img className="icon" src="/images/icon/login.png" />
          <div className="text">로그인</div>
        </div>
      </Link>
    </LoginBox>
  );
}
