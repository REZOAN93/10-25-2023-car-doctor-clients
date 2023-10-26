import React from "react";
import about1 from "../../assets/images/about_us/person.jpg";
import about2 from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="grid grid-cols-2 h-[500px] my-10">
      <div className=" relative">
        <div className=" h-5/6 w-10/12">
          <img className=" w-full h-full rounded-lg" src={about1} alt="" />
        </div>
        <div className=" absolute bottom-0 right-0 border-8 border-white">
          <img className=" w-64 h-64" src={about2} alt="" />
        </div>
      </div>
      <div className=" space-y-10 pl-10">
        <h1 className=" text-[#FF3811] font-bold text-lg">About Us</h1>
        <p className=" text-5xl font-bold">
          We are qualified <br /> & of experience <br /> in this field
        </p>
        <p className=" text-justify text-gray-500">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <p className=" text-justify text-gray-500">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <button className="btn py-3 px-8 btn-primary text-white bg-[#FF3811] border-none">
          Get More Info
        </button>
      </div>
    </div>
  );
};

export default About;
