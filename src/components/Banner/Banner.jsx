import React from 'react';
import bgImg from "../../assets/bg-shadow.png"
import heroImg from "../../assets/banner-main.png"
import gradient1 from "../../assets/gradient1.png"
import gradient2 from "../../assets/gradient2.png"

const Banner = () => {
    return (
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className=" bg-no-repeat bg-cover bg-[#131313] my-8 rounded-4xl mx-10 text-white flex flex-col justify-center items-center py-16"
      >
        <img className='absolute right-10 top-34 md:top-34 lg:top-30 rounded-4xl' src={gradient2} alt="" />
        <div className="mb-6">
          <img src={heroImg} alt="" />
        </div>
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h2>
          <p className="text-white/70 text-xl ">
            Beyond Boundaries Beyond Limits
          </p>
          <button className="btn bg-transparent text-[#E7FE29] border-[#E7FE29] rounded-xl hover:bg-[#E7FE29] hover:text-[#131313]">
            Claim Free Credit
          </button>
        </div>
      </div>
    );
}

export default Banner;
