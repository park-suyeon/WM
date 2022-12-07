import styled from "styled-components";

const OrderWrapper = styled.div`
  //모바일
  @media screen and (max-width: 768px) {
    padding: 5px 24px;
    width: 100vw;
    border-top: 4px solid #ededed;
    display: flex;
    justify-content: space-between;
    background-color: white;
    z-index: 3;
    border-radius: 0px 0px 10px 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    .text {
      font-weight: 500;
      font-size: 15px;
    }
    .buttonOn {
      cursor: pointer;
      padding: 5px;
      border-bottom: 2px solid #1093ff;
    }
    .buttonOff {
      cursor: pointer;
      padding: 5px;
    }
  }
  //데스크탑
  @media screen and (min-width: 769px) {
    padding: 5px 24px;
    width: 500px;
    border-top: 4px solid #ededed;
    border-radius: 0px 0px 10px 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);

    display: flex;
    justify-content: space-between;
    background-color: white;
    z-index: 3;
    .text {
      font-weight: 500;
      font-size: 15px;
    }
    .buttonOn {
      cursor: pointer;
      padding: 5px;
      border-bottom: 2px solid #1093ff;
    }
    .buttonOff {
      cursor: pointer;
      padding: 5px;
    }
  }
`;

export default function Order({ currentOrder, setCurrentOrder }) {
  console.log("currentOrder : ", currentOrder);
  return (
    <OrderWrapper>
      <div
        className={currentOrder === "onlySubway" ? "buttonOn" : "buttonOff"}
        onClick={() => setCurrentOrder("onlySubway")}
      >
        <div className="text">휠체어 추천순</div>
      </div>
      <div
        className={currentOrder === "lessTransfer" ? "buttonOn" : "buttonOff"}
        onClick={() => setCurrentOrder("lessTransfer")}
      >
        <div className="text">최소 환승순</div>
      </div>
      <div
        className={currentOrder === "faster" ? "buttonOn" : "buttonOff"}
        onClick={() => setCurrentOrder("faster")}
      >
        <div className="text">빠른 도착순</div>
      </div>
    </OrderWrapper>
  );
}
