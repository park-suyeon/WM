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
    padding: 0px 0px 0px 10px;
    font-size: 18px;
    margin-bottom: 10px;
  }
  .swapicon {
    position: fixed;
    top: 60px;
    right: 10px;
  }
  .xicon {
    position: fixed;
    top: 20px;
    right: 15px;
  }
`;
const SearchBlock = (props) => {
  return (
    <SearchHeader>
      <img className="xicon" src="/images/icon/x.png" />
      <input className="searchBar" />
      <img className="swapicon" src="/images/icon/swap.png" />
      <input className="searchBar" />
      <div></div>
    </SearchHeader>
  );
};
export default SearchBlock;
