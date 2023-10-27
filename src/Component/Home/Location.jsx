import React from "react";
import img1 from "../../assets/New folder/001-timetable.svg";
import img2 from "../../assets/New folder/Group34.svg";
import img3 from "../../assets/New folder/Group35.svg";

const Location = () => {
  return (
    <div className=" bg-black my-10 rounded-lg text-white grid grid-cols-3 items-center py-10">
      <div className=" flex gap-5 items-center p-10">
        <img src={img1} alt="" />
        <div className=" space-y-2">
          <h1> We are open monday-friday </h1>
          <p className=" text-3xl">7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className=" flex gap-5 items-center p-10">
        <img src={img2} alt="" />
        <div className=" space-y-2">
          <p>Have a question?</p>
          <p className=" text-3xl">+2546 251 2658</p>
        </div>
      </div>
      <div className=" flex gap-5 items-center p-10">
        <img src={img3} alt="" />
        <div className=" space-y-2">
          <p>Need a repair? our address</p>
          <p className=" text-3xl">Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
