import styled from "styled-components";
import { useRouter } from "next/router";
import { useReducer } from "react";

const Login = styled.div`
  width: 55px;
  height: 55px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 12px;
  cursor: pointer;
  .icon {
    width: 23px;
  }
  .text {
    font-size: 10px;
    color: #666666;
  }
`;

export default function LoginButton() {
  const router = useRouter();
  return (
    <Login
      onClick={() => {
        router.push("/login");
      }}
    >
      <>
        <img className="icon" src="/images/icon/login.png" />
        <div className="text">로그인</div>
      </>
    </Login>
  );
}
