import styled from "styled-components";

const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;

  .final {
    font-weight: 400;
    font-size: 10px;
    color: #545454;
    display: flex;
    text-align: right;
    justify-content: flex-end;
    align-items: center;
    margin: 0px 22px 23px 0px;
  }
  .photos {
    display: flex;
    margin: 0px 28px 35px 28px;
  }
  .photo1 {
    width: 168px;
    height: 200px;
    margin-right: 10px;
  }
  .photoLeft {
    display: flex;
    flex-direction: column;
  }
  .photo2 {
    margin-bottom: 10px;
    width: 141px;
    height: 95px;
  }
  .photo3 {
    width: 141px;
    height: 95px;
  }
  .text {
    margin-right: 3px;
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
