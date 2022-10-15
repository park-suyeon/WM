import styled from "styled-components";

const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;

  .final {
    width: 100%;
    font-weight: 400;
    font-size: 11px;
    color: #545454;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0px 22px 23px 0px;
    .text {
      margin-right: 3px;
    }
  }
  .photos {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    .photo1 {
      width: 168px;
      height: 200px;
      margin-right: 10px;
    }
    .photoLeft {
      display: flex;
      flex-direction: column;
      .photo2 {
        margin-bottom: 10px;
        width: 141px;
        height: 95px;
      }
      .photo3 {
        width: 141px;
        height: 95px;
      }
    }
  }
`;

const Photo = (props) => {
  return (
    <PhotoWrapper>
      <div>
        <div className="final">
          <div className="text">최종 수정일 :</div>
          <div>2022.09.01</div>
        </div>
        <div className="photos">
          <img className="photo1" src="/images/photo1.jpg" />
          <div className="photoLeft">
            <img className="photo2" src="/images/photo2.jpg" />
            <img className="photo3" src="/images/photo3.jpg" />
          </div>
        </div>
      </div>
    </PhotoWrapper>
  );
};
export default Photo;
