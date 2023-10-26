import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";

const Cover = () => {
  return (
    <div className="carousel w-full rounded-lg h-[500px] my-5">
      <div id="slide1" className="carousel-item relative w-full ">
        <div className=" h-[500px] w-full">
          <img src={img1} className="w-full h-[500px]" />
        </div>
        <div className="absolute h-full w-full px-20 py-10 space-y-10 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <p className=" text-6xl text-white font-extrabold">
            Affordable
            <br /> Price For Car <br /> Servicing
          </p>
          <p className=" text-white text-2xl">
            There are many variations of passages of available, but <br /> the
            majority have suffered alteration in some form
          </p>
          <div className=" flex gap-3">
            <button className="btn py-3 px-8 btn-primary text-white bg-[#FF3811] border-none">
              Discover More
            </button>
            <button className="btn py-3 px-8 btn-outline text-white hover:bg-[#FF3811] hover:border-none">
              Latest Project
            </button>
          </div>
          <div className="absolute flex justify-end gap-5 left-5 right-5 bottom-5 ">
            <a
              href="#slide6"
              className="btn glass hover:bg-orange-700 btn-circle text-white text-lg"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn glass hover:bg-orange-700 btn-circle text-white text-lg"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className=" h-[500px] w-full">
          <img src={img2} className="w-full h-[500px]" />
        </div>
        <div className="absolute h-full w-full px-20 py-10 space-y-10 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <p className=" text-6xl text-white font-extrabold">
            Affordable
            <br /> Price For Car <br /> Servicing
          </p>
          <p className=" text-white text-2xl">
            There are many variations of passages of available, but <br /> the
            majority have suffered alteration in some form
          </p>
          <div className=" flex gap-3">
            <button className="btn py-3 px-8 btn-primary text-white bg-[#FF3811] border-none">
              Discover More
            </button>
            <button className="btn py-3 px-8 btn-outline text-white hover:bg-[#FF3811] hover:border-none">
              Latest Project
            </button>
          </div>
          <div className="absolute flex justify-end gap-5 left-5 right-5 bottom-5 ">
            <a
              href="#slide1"
              className="btn glass hover:bg-orange-700 btn-circle text-white text-lg"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn glass hover:bg-orange-700 btn-circle text-white text-lg"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
      <div className=" h-[500px] w-full">
          <img src={img3} className="w-full h-[500px]" />
        </div>
        <div className="absolute h-full w-full px-20 py-10 space-y-10 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <p className=" text-6xl text-white font-extrabold">
            Affordable
            <br /> Price For Car <br /> Servicing
          </p>
          <p className=" text-white text-2xl">
            There are many variations of passages of available, but <br /> the
            majority have suffered alteration in some form
          </p>
          <div className=" flex gap-3">
            <button className="btn py-3 px-8 btn-primary text-white bg-[#FF3811] border-none">
              Discover More
            </button>
            <button className="btn py-3 px-8 btn-outline text-white hover:bg-[#FF3811] hover:border-none">
              Latest Project
            </button>
          </div>
          <div className="absolute flex justify-end gap-5 left-5 right-5 bottom-5 ">
            <a
              href="#slide2"
              className="btn glass hover:bg-orange-700 btn-circle text-white text-lg"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn glass hover:bg-orange-700 btn-circle text-white text-lg"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
      <div className=" h-[500px] w-full">
          <img src={img4} className="w-full h-[500px]" />
        </div>
        <div className="absolute h-full w-full px-20 py-10 space-y-10 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <p className=" text-6xl text-white font-extrabold">
            Affordable
            <br /> Price For Car <br /> Servicing
          </p>
          <p className=" text-white text-2xl">
            There are many variations of passages of available, but <br /> the
            majority have suffered alteration in some form
          </p>
          <div className=" flex gap-3">
            <button className="btn py-3 px-8 btn-primary text-white bg-[#FF3811] border-none">
              Discover More
            </button>
            <button className="btn py-3 px-8 btn-outline text-white hover:bg-[#FF3811] hover:border-none">
              Latest Project
            </button>
          </div>
          <div className="absolute flex justify-end gap-5 left-5 right-5 bottom-5 ">
            <a
              href="#slide3"
              className="btn glass hover:bg-orange-700 btn-circle text-white text-lg"
            >
              ❮
            </a>
            <a
              href="#slide5"
              className="btn glass hover:bg-orange-700 btn-circle text-white text-lg"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
      <div className=" h-[500px] w-full">
          <img src={img5} className="w-full h-[500px]" />
        </div>
        <div className="absolute h-full w-full px-20 py-10 space-y-10 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <p className=" text-6xl text-white font-extrabold">
            Affordable
            <br /> Price For Car <br /> Servicing
          </p>
          <p className=" text-white text-2xl">
            There are many variations of passages of available, but <br /> the
            majority have suffered alteration in some form
          </p>
          <div className=" flex gap-3">
            <button className="btn py-3 px-8 btn-primary text-white bg-[#FF3811] border-none">
              Discover More
            </button>
            <button className="btn py-3 px-8 btn-outline text-white hover:bg-[#FF3811] hover:border-none">
              Latest Project
            </button>
          </div>
          <div className="absolute flex justify-end gap-5 left-5 right-5 bottom-5 ">
            <a
              href="#slide4"
              className="btn glass hover:bg-orange-700 btn-circle text-white text-lg"
            >
              ❮
            </a>
            <a
              href="#slide6"
              className="btn glass hover:bg-orange-700 btn-circle text-white text-lg"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
      <div className=" h-[500px] w-full">
          <img src={img6} className="w-full h-[500px]" />
        </div>
        <div className="absolute h-full w-full px-20 py-10 space-y-10 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <p className=" text-6xl text-white font-extrabold">
            Affordable
            <br /> Price For Car <br /> Servicing
          </p>
          <p className=" text-white text-2xl">
            There are many variations of passages of available, but <br /> the
            majority have suffered alteration in some form
          </p>
          <div className=" flex gap-3">
            <button className="btn py-3 px-8 btn-primary text-white bg-[#FF3811] border-none">
              Discover More
            </button>
            <button className="btn py-3 px-8 btn-outline text-white hover:bg-[#FF3811] hover:border-none">
              Latest Project
            </button>
          </div>
          <div className="absolute flex justify-end gap-5 left-5 right-5 bottom-5 ">
            <a
              href="#slide5"
              className="btn glass hover:bg-orange-700 btn-circle text-white text-lg"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn glass hover:bg-orange-700 btn-circle text-white text-lg"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
