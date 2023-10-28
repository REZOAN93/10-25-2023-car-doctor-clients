import React, { useContext } from "react";
import img1 from "../../assets/images/checkout/checkout.png";
import { useLoaderData } from "react-router-dom";
import "./CheckOut.css";
import Footer from "../Footer/Footer";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const CheckOut = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(data);

  const handleOrderSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstname.value;
    const lastName = form.lastName.value;
    const CustomerName = firstName + " " + lastName;
    const Phone = form.phone.value;
    const serviceDate = form.serviceDate.value;
    const email = form.email.value;
    const message = form.message.value;
    const orderID = data._id;
    const bookingData = {
      CustomerName,
      Phone,
      email,
      message,
      orderID,
      serviceDate,
      ServiceUrl: data.img,
      serviceDescription: data.description,
      serviceName: data.title,
      price: data.price,
    };
    axios
      .post(
        "https://10-25-2023-car-doctor-server-44eunh6z4-rezoan93.vercel.app/booking",
        bookingData
      )
      .then((data) => {
        console.log(data.data);
        if (data.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Service is Submitted",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };
  return (
    <div>
      <div className=" my-5 max-w-7xl mx-auto">
        <div className=" relative ">
          <img className=" w-full" src={img1} alt="" />
          <p className=" bg-gradient-to-r  from-[#151515] rounded-lg w-full h-full border absolute top-0 p-32 text-white font-bold text-4xl pl-10">
            Check Out
          </p>
          <div className=" absolute flex justify-center bottom-0 w-full">
            <p className="triangle text-white px-10 font-bold text-2xl">
              Home/Checkout
            </p>
          </div>
        </div>
        <div className=" w-8/12 mx-auto my-10 rounded-2xl bg-base-200">
          <div className="">
            <div className="card w-full shadow-2xl bg-base-100">
              <form onSubmit={handleOrderSubmit} className="card-body">
                <div className=" grid grid-cols-2 gap-2 my-5">
                  <div className="form-control">
                    <input
                      type="text"
                      name="service"
                      placeholder="Service Name"
                      defaultValue={data.title}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="date"
                      name="serviceDate"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className=" grid grid-cols-3 gap-2 mb-5">
                  <div className="form-control">
                    <input
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="LastName"
                      name="lastName"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      defaultValue={"$ " + data?.price}
                      name="price"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className=" grid grid-cols-2 gap-2">
                  <div className="form-control">
                    <input
                      type="number"
                      name="phone"
                      placeholder="Your Phone"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="email"
                      name="email"
                      defaultValue={user?.email}
                      placeholder="Your Email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <textarea
                  placeholder="Your Message"
                  name="message"
                  className=" mt-6 textarea textarea-bordered textarea-lg w-full"
                ></textarea>
                <div className="form-control mt-6">
                  <button className="btn bg-[#FF3811] text-white text-lg capitalize hover:bg-orange-800">
                    Order Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-20">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default CheckOut;
