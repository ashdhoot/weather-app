import React, { useRef, useState } from "react";

const UseRefcomp = () => {
  const luckyname = useRef("");

  const [show, setShow] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    let myName = luckyname.current.value;
    myName === ""
      ? console.warn("Please Enter your lucky name")
      : setShow(true);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Please enter your lucky name"
          ref={luckyname}
        />
        <button className="btn-success">Submit</button>
      </form>
      <h3> {show && `Your Lucky Name is ${luckyname.current.value}`}</h3>
    </div>
  );
};

export default UseRefcomp;
