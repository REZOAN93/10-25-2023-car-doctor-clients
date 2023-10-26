import { BsArrowRight } from "react-icons/bs";

const ServiceDetails = ({service}) => {
    const {title,img,price}=service;
    return (
        <div className="card bg-base-100 shadow-xl border">
        <figure className="px-5 pt-5 h-full rounded-lg">
          <img className=' h-full rounded-lg' src={img} />
        </figure>
        <div className=" px-5 py-5">
          <h2 className="card-title ">{title}</h2>
          <div className=' font-bold text-lg text-[#FF3811] mt-5 flex justify-between items-center'>
            <p>${price}</p>
            <BsArrowRight className=" btn btn-circle text-[#FF3811] p-2 font-extrabold hover:bg-[#FF3811] hover:text-white text-3xl"/>
          </div>
        </div>
      </div>
    );
};

export default ServiceDetails;