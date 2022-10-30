import React, { useState } from "react";
import "./PassingCount.css";

const FirstChild = (props) => {
  console.log(`자식1 ${props.data}`);
  return (
    <div className="one">
      <p>자식 1컴포넌트</p>
      <p> (카운터: {props.data})</p>
    </div>
  );
};

const SecondChild = (props) => {

  const onLeftClick = () => props.setLeft((data) => data + 1);

  const onRightClick = () => props.setRight((data) => data + 1);

  console.log("자식 2 (버튼)");

  return (
    <div className="two">
      <p>자식 2 컴포넌트</p>
      <button onClick={onLeftClick}> 자식 1 카운터++ </button>
      <button onClick={props.resetData}> 카운터0</button>
      <button onClick={onRightClick}> 자식 2 카운터++ </button>
    </div>
  );
};


const ThirdChild = (props) => {
  console.log(`자식3 ${props.data}`);

  return (
    <div className="three">
      <p>자식3 컴포넌트</p>
      <p>(카운터: {props.data})</p>
    </div>
  );
};

const PassingCount = (props) => {
  const [leftCount, setLeftCount] = useState(0);
  const [rightCount, setRightCount] = useState(0);
  const resetData = () => {
    setLeftCount(0);
    setRightCount(0);
  };
  return (
    <div className="parent">
      부모컴포넌트
      <br />
      (왼쪽 카운트: {leftCount}, 오른쪽 카운트: {rightCount})
      <div className="layout">
        <FirstChild data={leftCount} />
        <SecondChild
          setLeft={setLeftCount}
          setRight={setRightCount}
          resetData={resetData}
        />
        <ThirdChild data={rightCount} />
      </div>
    </div>
  );
};

export default PassingCount;
