import React from 'react'
import footerLogo from "../../../assets/logo-footer.png";
import btn from "../../../assets/btn.png";

const Footer = () => {
  return (
    <div className="bg-[#06091a] pt-50">
      <div className='container mx-auto pb-18 border-' >
        <div className="flex justify-center items-center pb-16">
          <img src={footerLogo} alt="" />
        </div>

        <div className="text-white flex justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-2">About Us</h2>
            <p className="text-white/70">
              We are a passionate team <br /> dedicated to providing the best{" "}
              <br /> services to our customers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-5">Quick Links</h2>
            <ul>
              <li className="text-white/70 list-disc">
                <a href="./">Home</a>
              </li>
              <li className="text-white/70 list-disc">
                <a href="./ervices">Services</a>
              </li>
              <li className="text-white/70 list-disc">
                <a href="./about">About</a>
              </li>
              <li className="text-white/70 list-disc">
                <a href="./contact">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-5">Subscribe</h2>
            <p className="text-white/70 mb-3">
              Subscribe to our newsletter for the <br /> latest updates.
            </p>
            <div className="flex">
              <input
                className="bg-white outline-none rounded-lg rounded-r-none h-12 text-black/40 py-4 px-8"
                type="email"
                placeholder="Enter your email"
              />
              <img src={btn} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className='border-t border-white/40 pb-8'></div>
        <p className='text-white/70 text-center pb-8'>&copy; 2026 Your company all rights reserver</p>
    </div>
  );
}

export default Footer
