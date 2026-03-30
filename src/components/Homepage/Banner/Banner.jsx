import React, { useState } from 'react';
import bgImg from "../../../assets/bg-shadow.png"
import heroImg from "../../../assets/banner-main.png"
import { toast } from 'react-toastify';


const Banner = ({setCoin }) => {
  const [btnClicked, setBtnClicked] = useState(false)

  const handleBtnClicked = () => {
    setBtnClicked(true)
        toast.info(`You got 10000000 free credit`);
    
    setCoin(10000000)
  }

  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className=" bg-no-repeat bg-cover bg-[#131313] my-8 rounded-4xl container mx-auto text-white flex flex-col justify-center items-center py-16"
    >
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
        <button
          disabled={btnClicked}
          onClick={handleBtnClicked}
          className="btn bg-transparent text-[#E7FE29] border-[#E7FE29] rounded-xl hover:bg-[#E7FE29] hover:text-[#131313]"
        >
          {btnClicked?"Claimed":"Claim Free Credit"}
        </button>
      </div>
    </div>
  );
};

export default Banner;
