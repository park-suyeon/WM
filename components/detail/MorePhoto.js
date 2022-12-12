import styled from "styled-components";
import Link from "next/link";

const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  overflow: scroll;
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

const MorePhoto = ({ id, createdAt, updatedAt, options }) => {
  const Options = options?.map(({ name, desc, images }) => {
    const Images = images.map((image) => {
      return <img src={image} />;
    });
    if (name === "입구 경사로") {
      return (
        <div className="wrapper">
          <div className="title" key={name}>
            입구 경사로
          </div>
          <div className="content">{desc}</div>
          <div className="photos">{Images}</div>
        </div>
      );
    }
    if (name === "승강기") {
      return (
        <div className="wrapper">
          <div className="title" key={name}>
            엘리베이터
          </div>
          <div className="content">{desc}</div>
          <div className="photos">{Images}</div>
        </div>
      );
    }
    if (name === "휠체어 급속 충전기") {
      return (
        <div className="wrapper">
          <div className="title" key={name}>
            휠체어 급속 충전기
          </div>
          <div className="content">{desc}</div>
          <div className="photos">{Images}</div>
        </div>
      );
    }
    if (name === "장애인 화장실") {
      return (
        <div className="wrapper">
          <div className="title" key={name}>
            장애인 화장실
          </div>
          <div className="content">{desc}</div>
          <div className="photos">{Images}</div>
        </div>
      );
    }
    if (name === "휠체어 리프트") {
      return (
        <div className="wrapper">
          <div className="title" key={name}>
            휠체어 리프트
          </div>
          <div className="content">{desc}</div>
          <div className="photos">{Images}</div>
        </div>
      );
    }
    if (name === "기타") {
      return (
        <div className="wrapper">
          <div className="title" key={name}>
            기타
          </div>
          <div className="content">{desc}</div>
          <div className="photos">{Images}</div>
        </div>
      );
    }
  });
  return (
    <PhotoWrapper>
      <div>{Options}</div>
      <div className="editWrapper">
        <div className="finalWrapper">
          <div className="final">
            <div className="text">최초 생성일 :</div>
            {createdAt.split("T")[0]}
          </div>
          <div className="final">
            <div className="text">최종 수정일 :</div>
            {updatedAt.split("T")[0]}
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
