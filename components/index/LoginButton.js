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
    margin-right: 9px;
    cursor: pointer;
    .icon {
      width: 26px;
      margin: 15px;
    }
  }
`;

export default function LoginButton() {
  return (
    <LoginBox>
      <Link href="/login">
        <div className="iconWrapper">
          <img className="icon" src="/images/icon/login.png" />
        </div>
      </Link>
    </LoginBox>
  );
}
