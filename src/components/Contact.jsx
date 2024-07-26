import React, { useState } from "react";

export default function Contact() {
  const obj = {
    userName: "",
    num: "",
    email: "",
    subj: "",
    msg: "",
  };

  const [valOnChange, setValOnChange] = useState(obj);
  const [inpVal, setInpVal] = useState();

  const handleOnChange = (e) => {
    let { value, name } = e.target;
    setValOnChange((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  };

  const handleOnClick = () => {
    setInpVal(valOnChange);
    alert(`My name is ${inpVal.userName}. My phone number is ${inpVal.num}. My email is ${inpVal.email}. My subject is ${inpVal.subj}. I want to say that "${inpVal.msg}"`);
  };

  return (
    <>
      <div className="container">
        <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-8 col-sm-9 col-10 mx-auto mt-5">
          <form onSubmit={(e) => {e.preventDefault();}}>
            <input
              className="w-100 c-inp"
              onChange={handleOnChange}
              name="userName"
              placeholder="enter your name"
              type="text"
            />
            <input
              className="w-100 c-inp"
              onChange={handleOnChange}
              name="num"
              placeholder="enter your number"
              type="number"
            />
            <input
              className="w-100 c-inp"
              onChange={handleOnChange}
              name="email"
              placeholder="enter your email"
              type="email"
            />
            <input
              className="w-100 c-inp"
              onChange={handleOnChange}
              name="subj"
              placeholder="enter your subject"
              type="text"
            />
            <textarea
              className="w-100 c-inp"
              onChange={handleOnChange}
              rows={5}
              name="msg"
              placeholder="enter your message"
            ></textarea>

            <button className="h-btn" onClick={handleOnClick}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}