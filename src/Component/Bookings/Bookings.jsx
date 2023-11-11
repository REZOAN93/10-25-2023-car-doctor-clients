import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Footer from "../Footer/Footer";
import img1 from "../../assets/images/checkout/cover.jpg";
import { useQuery } from "@tanstack/react-query";
import BookingDetails from "./BookingDetails";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../Customhooks/useAxiosSecure";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [booking, setBooking] = useState([]);
  // const url = `https://10-25-2023-car-doctor-server.vercel.app/booking?email=${user?.email}`;

  const url = `/booking?email=${user?.email}`;
  useEffect(() => {
    axiosSecure.get(url).then((res) => setBooking(res.data));
  }, [url, axiosSecure]);

  // useEffect(() => {
  //   axios.get(url, { withCredentials: true }).then((res) => {
  //     setBooking(res.data);
  //   });
  // }, []);

  //   // fetch(`https://10-25-2023-car-doctor-server.vercel.app/booking?email=${user?.email}`)
  //   //   .then((res) => res.json())
  //   //   .then((data) => setBooking(data));
  //

  const handleBookingConfirm = (id) => {
    fetch(`https://10-25-2023-car-doctor-server.vercel.app/booking/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status: "Confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Service has been Confirmed.",
            showConfirmButton: false,
            timer: 1500,
          });
          const remaining = booking.filter((na) => na._id !== id);
          const updated = booking.find((na) => na._id === id);
          updated.status = "Confirm";
          const newBooking = [updated, ...remaining];
          setBooking(newBooking);
        }
      });
  };

  const handleDeleteService = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://10-25-2023-car-doctor-server.vercel.app/booking/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            if (data.deletedCount > 0) {
              const remaining = booking.filter((na) => na._id !== id);
              setBooking(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className=" my-5 max-w-7xl mx-auto">
        <div className=" relative h-[300px] rounded-2xl">
          <img className=" w-full h-full" src={img1} alt="" />
          <p className=" bg-gradient-to-r  from-[#151515] rounded-lg w-full h-full border absolute top-0 p-32 text-white font-bold text-4xl pl-10">
            Check Out
          </p>
          <div className=" absolute flex justify-center bottom-0 w-full">
            <p className="triangle text-white px-10 font-bold text-2xl">
              Home - Product Details
            </p>
          </div>
        </div>
      </div>

      {booking.map((na) => (
        <BookingDetails
          key={na._id}
          data={na}
          handleDeleteService={handleDeleteService}
          handleBookingConfirm={handleBookingConfirm}
        ></BookingDetails>
      ))}

      <div className=" mt-20">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Bookings;
