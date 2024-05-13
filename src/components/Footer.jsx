// import React from 'react';
import { faEnvelope, faPhone, faLocationDot, faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
  return (
    <footer className="bg-gray-300 text-blue-900">
      {/* <div className="w-[45%] text-[40px] pt-[30px] pl-[80px]">
            <p>Explore infinite worlds between the pages.</p>
        </div> */}
      <div className=" mx-auto py-16 flex flex-col items-center sm:items-start sm:flex-row sm:justify-between">

        <div className=" flex justify-center flex-col items-center w-[100%] sm:w-[33%]">
          <h1 className="text-center text-xl font-bold mb-8 flex text-[30px] sm:text-[32px] text-orange-500 ">Contact Us</h1>
          <div className=" flex flex-col items-center justify-center text-[12px] sm:text-[16px] sm:items-start">
            <div className=" relative mb-6 sm:pl-[15px] w-[200px]">
              <i className="absolute text-[20px] right-[-30px] text-orange-500 ">
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              <p className="text-[16px]">support@dropyksa.com</p>
            </div>
            <div className=" relative mb-6 sm:pl-[15px] w-[200px]" >
              <i className="absolute text-[20px] right-[-30px] text-orange-500 ">
                <FontAwesomeIcon icon={faMobileScreenButton} />
              </i>
              <p className="text-[16px] text-right" dir="ltr">0531010060</p>
            </div>
            <div className=" relative mb-6 sm:pl-[15px] w-[200px]" >
              <i className="absolute text-[20px] right-[-30px] text-orange-500 ">
                <FontAwesomeIcon icon={faPhone} />
              </i>
              <p className="text-[16px] text-right" dir="ltr">0112399558</p>
            </div>
            <div className=" relative sm:pl-[15px] w-[200px]">
              <i className="absolute text-[20px] right-[-30px] text-orange-500 ">
                <FontAwesomeIcon icon={faLocationDot} />
              </i>
              <p className="text-[16px]">الرياض - حي الملك فيصل - ش فيروز العبد العزيز</p>
            </div>
          </div>
        </div>

        <div className=" relative mt-12 sm:mt-[0] w-[100%] sm:w-[33%]">
          <div className="absolute right-[8px] -ml-0.5 lg:w-0.5 h-[180px] top-[20px] bg-orange-500"></div>
          <h1 className="text-center text-xl font-bold mb-8 text-[30px] sm:text-[32px] text-orange-500 ">تصفح المزيد</h1>
          <div className="sm:text-[16px]">
            <ul className="flex flex-col items-center gap-[20px]">
              <li className="w-[200px]" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <Link to={"/"} className=" hover:text-orange-500 transition text-[16px]">
                  الرئيسية
                </Link>
              </li>
              <li className="w-[200px]" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <Link to={"/aboutus"} className=" hover:text-orange-500 transition text-[16px]">
                  نبذة عنا
                </Link>
              </li>
              <li className="w-[200px]" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <Link to={"/services"} className=" hover:text-orange-500 transition text-[16px]">
                  خدمات
                </Link>
              </li>
              <li className="w-[200px]" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <Link to={"/contactus"} className=" hover:text-orange-500 transition text-[16px]">
                  تواصل معنا
                </Link>
              </li>
              <li className="w-[200px]" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <Link to={"/gallary"} className=" hover:text-orange-500 transition text-[16px]">
                  معرض الصور
                </Link>
              </li>

            </ul>
          </div>
        </div>

        <div className="relative mt-12 sm:mt-[0] w-[100%] sm:w-[33%]">
          <div className="absolute right-[8px] -ml-0.5 lg:w-0.5 h-[180px] top-[20px] bg-orange-500"></div>
          <h1 className="text-center text-xl font-bold mb-8 text-[30px] sm:text-[32px] text-orange-500 ">Follow Us</h1>
          <div className=" flex justify-center">
            <Icon />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

