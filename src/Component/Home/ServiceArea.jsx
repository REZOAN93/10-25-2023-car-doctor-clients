import { useQuery } from "@tanstack/react-query";
import ServiceDetails from "./ServiceDetails";

const ServiceArea = () => {
  const {
    data: services,
    isPending,
    error,
    isError,
  } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch(
        "https://10-25-2023-car-doctor-server-44eunh6z4-rezoan93.vercel.app/services"
      );
      return res.json();
    },
  });

  if (isPending) {
    <div>Loading....</div>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  console.log(services);
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
