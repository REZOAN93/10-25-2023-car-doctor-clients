import axios from "axios";
import React from "react";

const BookingDetails = ({
  data,
  handleDeleteService,
  handleBookingConfirm,
}) => {
  const {
    _id,
    CustomerName,
    Phone,
    email,
    message,
    orderID,
    serviceDate,
    ServiceUrl,
    status,
    serviceDescription,
    serviceName,
    price,
  } = data;

  return (
    <div className="grid grid-cols-6 max-w-7xl mx-auto items-center my-5 border-b-2 pb-5">
      <div className=" flex justify-center ">
        <button
          onClick={() => handleDeleteService(_id)}
          className=" btn btn-circle"
        >
          X
        </button>
      </div>
      <div className=" flex gap-4 items-center col-span-2">
        <img className=" w-24 h-24 avatar rounded-xl" src={ServiceUrl} alt="" />
        <div>
          <h1 className=" font-bold text-lg">{serviceName}</h1>
          <h1 className=" text-sm text-gray-500">Color : Green</h1>
          <h1 className=" text-sm text-gray-500">Size: XS</h1>
        </div>
      </div>
      <div>
        <h1>$ {price}</h1>
      </div>
      <div>
        <h1>{serviceDate}</h1>
      </div>
      <div>
        {status === "Confirm" ? (
          <>
            <p className=" text-green-900 font-bold text-lg">Confirmed</p>
          </>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className=" bg-[#FF3811] text-white btn py-2 btn-sm px-8"
          >
            Pending
          </button>
        )}
      </div>
    </div>
  );
};

export default BookingDetails;
