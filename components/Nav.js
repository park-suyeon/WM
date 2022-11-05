import styled from "styled-components";
import Link from "next/link";
const NavBlock = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-size: 12px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > .home {
      padding: 5px 10px;
      cursor: pointer;
    }
    & > .nav_right {
      display: flex;
    }
  }
  .login {
    color: #0f3f62;
    display: flex;
    cursor: pointer;
    padding: 10px 20px;
  }
  .membership {
    background-color: white;
    color: blue;
    border-radius: 20px;
    cursor: pointer;
    padding: 10px 20px;
  }
`;
const Nav = (props) => {
  return (
    <NavBlock>
      <div className="header">
        <Link href="/">
          <img className="home" src="/images/logo.png"></img>
        </Link>
        <div className="nav_right">
          <Link href="/login">
            <div className="login">로그인</div>
          </Link>
          <Link href="/signup">
            <div className="membership">회원가입</div>
          </Link>
        </div>
      </div>
    </NavBlock>
  );
};
export default Nav;
