import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  padding: 24px;
  align-items: center;
  width: 100%;
  .map {
    margin-right: 13px;
    width: 40px;
  }
  .searchBar {
    height: 40px;
    width: 100%;
    border-radius: 999px;
    border: 2px solid #1093ff;
    background-color: white;
    padding: 10px;
    display: flex;
    align-items: center;
    font-size: 18px;
    padding-left: 40px;
  }

  .icon {
    position: absolute;
    left: 95px;
    top: 36px;
    width: 17px;
    transform: scaleX(-1);
  }
  .x {
    position: absolute;
    width: 16px;
    right: 40px;
    top: 37px;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <img className="map" src="/images/icon/map2.png" />
      <input className="searchBar" />
      <img className="icon" src="/images/icon/search.png" />
      <img className="x" src="/images/icon/x.png" />
    </HeaderWrapper>
  );
}
