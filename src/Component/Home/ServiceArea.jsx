import { useQuery } from "@tanstack/react-query";
import ServiceDetails from "./ServiceDetails";
import { useEffect, useState } from "react";
import useAxiosSecure from "../Customhooks/useAxiosSecure";

const ServiceArea = () => {
  const [asyc, setAsyc] = useState(true)
  const axiosSecure = useAxiosSecure()

  const [services, setServices] = useState([])
  const [search, setSearch] = useState('')

  const handleSearch = (event) => {
    event.preventDefault()
    const searchText = event.target.search.value;
    setSearch(searchText)
  }

  useEffect(() => {
    axiosSecure.get(`http://localhost:5000/services?sort=${asyc ? 'asyc' : 'dasyc'}&search=${search}`)
      .then(res => {
        setServices(res.data)
      })
  }, [asyc, axiosSecure, search])

  // const { data: services, isPending, error, isError } = useQuery({
  //   queryKey: ["services"],
  //   queryFn: async () => {
  //     const url=`http://localhost:5000/services?sort=${asyc ? 'asyc' : 'dasyc'}`
  //     const res = await fetch(url);
  //     return res.json();
  //   },
  // });

  // if (isPending) {
  //   <div>Loading....</div>;
  // }
  // if (isError) {
  //   return <p>{error.message}</p>;
  // }

  // console.log(services);
  return (
    <div className=" my-10">
      <div className=" text-center space-y-3">
        <h1 className=" text-[#FF3811] font-bold text-lg">Service</h1>
        <h1 className=" font-bold text-5xl">Our Service Area</h1>
        <p className=" text-gray-600">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
        <div className=" flex  justify-center mx-auto gap-6">
          <div >
            <form onSubmit={handleSearch} action="" className="join">
              <div>
                <div>
                  <input className="input input-bordered join-item" name="search" placeholder="Search" />
                </div>
              </div>
              <div className="indicator">
                {/* <span className="indicator-item badge badge-secondary">new</span> */}
                <button className="btn join-item">Search</button>
              </div>
            </form>
          </div>
          <button onClick={() => setAsyc(!asyc)} className="btn btn-success">{asyc ? 'Price Low to High' : 'Price High to Low'}</button>
        </div>
      </div>
      <div className=" grid grid-cols-3 gap-10 my-5">
        {services?.map((na) => (
          <ServiceDetails key={na._id} service={na}></ServiceDetails>
        ))}
      </div>
      <div className=" text-center my-10">
        <button className="btn py-3 px-8 btn-outline text-[#FF3811] hover:border-none hover:text-white hover:bg-[#FF3811]">
          More Services
        </button>
      </div>
    </div>
  );
};

export default ServiceArea;
