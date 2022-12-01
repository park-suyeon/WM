import styled from 'styled-components';

const OrderWrapper = styled.div`
  padding: 5px 24px;
  width: 100vw;
  border-top: 4px solid #ededed;
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
`;

export default function Order({ currentOrder, setCurrentOrder }) {
  console.log('currentOrder : ', currentOrder);
  return (
    <OrderWrapper>
      <div
        className={currentOrder === 'onlySubway' ? 'buttonOn' : 'buttonOff'}
        onClick={() => setCurrentOrder('onlySubway')}
      >
        <div className='text'>휠체어 추천순</div>
      </div>
      <div
        className={currentOrder === 'lessTransfer' ? 'buttonOn' : 'buttonOff'}
        onClick={() => setCurrentOrder('lessTransfer')}
      >
        <div className='text'>최소 환승순</div>
      </div>
      <div
        className={currentOrder === 'faster' ? 'buttonOn' : 'buttonOff'}
        onClick={() => setCurrentOrder('faster')}
      >
        <div className='text'>빠른 도착순</div>
      </div>
    </OrderWrapper>
  );
}
