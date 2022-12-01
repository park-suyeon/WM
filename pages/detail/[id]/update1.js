import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Header from "../../../components/detail/Header";
import FastSearch from "../../../components/index/FastSearch";
import Title from "../../../components/detail/Title";
import Step1 from "../../../components/detail/Step1";
import { data } from "../../../components/detail/Step1";
import Step2 from "../../../components/detail/Step2";
import Step3 from "../../../components/detail/Step3";
import ShareCallBox from "../../../components/detail/ShareCall";
import ButtonBox from "../../../components/index/ButtonBox";
import Map from "../../../components/Map";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import axios from "axios";
import OptionIcon from "../../../components/detail/OptionIcon";

const Content1 = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  width: 100vw;
`;
const Content2 = styled.div`
  position: fixed;
  z-index: 100;
  background-color: #ebf8ff;
  height: 70vh;
  bottom: 0px;
  left: 0;
  width: 100vw;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px 10px 0px 0px;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.2);
`;

export default function Home() {
  const [currentStep, setCurrentStep] = useState("1");
  const [btnActive, SetBtnActive] = useState([]);
  const [placeOption, setPlaceOption] = useState({});
  const step2ref = useRef(0);
  const id = "634400ba562a10fc789991e6";
  const { isLoading, error, data } = useQuery(["place", id], () =>
    axios(`/api/place/${id}`).then((res) => res.data)
  );
  if (isLoading) return "로딩중";
  const next = () => {
    const i = step2ref.current;
    if (currentStep === "1") {
      setCurrentStep(data[i]);
      step2ref.current++;
    }
    if (currentStep !== "1" && currentStep !== "3") {
      setCurrentStep(data[i]);
      step2ref.current++;
    }
    if (i === data.length) {
      setCurrentStep("3");
    }
    if (currentStep === "3") {
      axios.put(`/api/place/${id}`, placeOption);
    }
  };
  return (
    <div>
      <Head>
        <title>WMap</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Map></Map>
      <Content1>
        <Header></Header>
      </Content1>
      <Content2>
        <Title title={data.name}></Title>
        <OptionIcon options={data.options}></OptionIcon>
        <ShareCallBox></ShareCallBox>
        {currentStep === "1" && (
          <Step1 btnActive={btnActive} SetBtnActive={SetBtnActive}></Step1>
        )}
        {currentStep !== "1" && currentStep !== "3" && (
          <Step2 name={currentStep} setPlaceOption={setPlaceOption}></Step2>
        )}
        {currentStep === "3" && <Step3></Step3>}
        <ButtonBox
          text={currentStep === "3" ? "저장" : "다음"}
          onClick={next}
        />
      </Content2>
    </div>
  );
}
