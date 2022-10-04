import styled from "styled-components";
const NavBlock = styled.div`
<<<<<<< HEAD
  background-color: white;
=======
  background-color: wh;
>>>>>>> 4e5e3b55775d55b58378ee51d351bfd022528191
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
