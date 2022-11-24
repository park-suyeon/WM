import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

const HeaderWrapper = styled.div`
  display: flex;
  padding: 24px 24px 0px 24px;
  align-items: center;
  .logo {
    margin-right: 13px;
    cursor: pointer;
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
    box-shadow: 0px 6px 10px rgba(16, 147, 255, 0.2);
  }
  .icon {
    position: fixed;
    left: 105px;
    top: 40px;
    transform: scaleX(-1);
  }
`;

export default function Header() {
  const [searchText, setSearchText] = useState("");
  console.log(searchText);
  return (
    <HeaderWrapper>
      <Link href="/">
        <img className="logo" src="/images/logo.png" />
      </Link>
      <input
        className="searchBar"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <img className="icon" src="/images/icon/search.png" />
    </HeaderWrapper>
  );
}
