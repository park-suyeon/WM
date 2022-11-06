import styled from "styled-components";

const SearchHeader = styled.div`
  background-color: #1093ff;
  padding: 24px 10px 0px 15px;
  display: flex;
  flex-direction: column;
  .searchBar {
    height: 45px;
    width: 90%;
    border-radius: 15px;
    border: none;
    background-color: white;
    padding: 10px;
    font-size: 18px;
    margin-bottom: 10px;
  }
  .swapicon {
    position: absolute;
    top: 60px;
    right: 10px;
  }
  .xicon {
    position: absolute;
    top: 20px;
    right: 15px;
  }
`;
const SearchBlock = (props) => {
  return (
    <SearchHeader>
      <img className="xicon" src="/images/icon/x.png" />
      <input className="searchBar" placeholder="출발지 입력" />
      <img className="swapicon" src="/images/icon/swap.png" />
      <input className="searchBar" placeholder="도착지 입력" />
      <div></div>
    </SearchHeader>
  );
};
export default SearchBlock;
