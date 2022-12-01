import styled from "styled-components";
import Link from "next/link";

const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  .wrapper {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    .title {
      font-size: 15px;
      font-weight: 600;
      padding: 12px 30px;
    }
    .content {
      font-size: 13px;
      color: #545454;
      padding-left: 30px;
      padding-bottom: 20px;
    }
    .photos {
      display: flex;
      margin-bottom: 30px;
      margin-left: 30px;
      overflow: scroll;
      &::-webkit-scrollbar {
        display: none;
        width: 0 !important;
      }
      .photo1 {
        width: 100px;
        margin-right: 10px;
      }
      .photo2 {
        width: 100px;
        margin-right: 10px;
      }
      .photo3 {
        width: 100px;
        margin-right: 10px;
      }
    }
  }
  .editWrapper {
    display: flex;
    align-items: center;
    padding: 20px;
    .finalWrapper {
      width: 100%;
      font-size: 12px;
      color: #545454;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      margin-right: 20px;
      .final {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        text-align: right;
        margin-bottom: 5px;
        .text {
          margin-right: 3px;
        }
      }
    }
    .edit {
      background: #4461f2;
      width: 50px;
      height: 50px;
      border-radius: 99px;
      border: none;
      align-items: center;
      padding: 12px;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
      cursor: pointer;
      .icon {
        height: 25px;
      }
    }
  }
`;

const MorePhoto = ({ id }) => {
  return (
    <PhotoWrapper>
      <div className="wrapper">
        <div className="title">휠체어 급속 충전기</div>
        <div className="content">1층 로비 옆 계단에 위치</div>
        <div className="photos">
          <img className="photo1" src="/images/photo1.jpg" />
          <img className="photo2" src="/images/photo2.jpg" />
          <img className="photo3" src="/images/photo3.jpg" />
          <img className="photo1" src="/images/photo1.jpg" />
        </div>
      </div>
      <div className="wrapper">
        <div className="title">경사로</div>
        <div className="content">정문 출입구</div>
        <div className="photos">
          <img className="photo2" src="/images/photo2.jpg" />
          <img className="photo3" src="/images/photo3.jpg" />
        </div>
      </div>
      <div className="wrapper">
        <div className="title">승강기</div>
        <div className="content">안내센터 오른쪽</div>
        <div className="photos">
          <img className="photo3" src="/images/photo3.jpg" />
          <img className="photo1" src="/images/photo1.jpg" />
          <img className="photo2" src="/images/photo2.jpg" />
        </div>
      </div>

      <div className="editWrapper">
        <div className="finalWrapper">
          <div className="final">
            <div className="text">최종 수정인 :</div>
            <div>박수연</div>
          </div>
          <div className="final">
            <div className="text">최종 수정일 :</div>
            <div>2022.09.01</div>
          </div>
        </div>
        <Link href={`/detail/${id}/update`}>
          <div className="edit">
            <img className="icon" src="/images/icon/edit.png" />
          </div>
        </Link>
      </div>
    </PhotoWrapper>
  );
};
export default MorePhoto;
