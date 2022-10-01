import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  padding: 24px 24px 0px 24px;
  align-items: center;
  & > .logo {
    margin-right: 13px;
  }
  & > .searchBar {
    height: 40px;
    width: 100%;
    border-radius: 999px;
    border: 2px solid #1093ff;
    background-color: white;
    padding: 10px;
    display: flex;
    align-items: center;
    & > input {
      border: none;
      font-size: 18px;
    }
    & > img {
      margin-right: 15px;
    }
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <img className="logo" src="/images/logo.png" />
      <div className="searchBar">
        <img src="/images/icon/search.png" />
        <input></input>
      </div>
    </HeaderWrapper>
  );
}
