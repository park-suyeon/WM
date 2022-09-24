import styled from "styled-components";
const NavBlock = styled.div`
  background-color: #ebf8ff;
  display: flex;
  flex-direction: column;
  padding: 50px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > .home {
      padding: 10px 20px;
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
    border-radius: 30px;
    cursor: pointer;
    padding: 10px 20px;
  }
`;
const Nav = (props) => {
  return (
    <NavBlock>
      <div className="header">
        <img className="home" src="/images/logo.png"></img>
        <div className="nav_right">
          <div className="login">로그인</div>
          <div className="membership">회원가입</div>
        </div>
      </div>
    </NavBlock>
  );
};
export default Nav;
