// import React from 'react';
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
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
              <i className="absolute text-[20px] left-[-30px] left-[-10px] top-1/2 transform -translate-y-1/2 text-orange-500 ">
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              <p className="text-[16px]">book.shop@gmail.com</p>
            </div>
            <div className=" relative mb-6 sm:pl-[15px] w-[200px]">
              <i className="absolute text-[20px] left-[-30px] left-[-10px] top-1/2 transform -translate-y-1/2 text-orange-500 ">
                <FontAwesomeIcon icon={faPhone} />
              </i>
              <p className="text-[16px]">+20 12344567890</p>
            </div>
            <div className=" relative sm:pl-[15px] w-[200px]">
              <i className="absolute text-[20px] left-[-30px] left-[-10px] top-1/2 transform -translate-y-1/2 text-orange-500 ">
                <FontAwesomeIcon icon={faLocationDot} />
              </i>
              <p className="text-[16px]">Riyadh - King Faisal District - Fayrouz Al-Abd Al-Aziz Street</p>
            </div>
          </div>
        </div>

        <div className=" relative mt-12 sm:mt-[0] w-[100%] sm:w-[33%]">
          <div className="absolute left-[8px] -ml-0.5 lg:w-0.5 h-[180px] top-[20px] bg-orange-500"></div>
          <h1 className="text-center text-xl font-bold mb-8 text-[30px] sm:text-[32px] text-orange-500 ">Quick Links</h1>
          <div className="sm:text-[16px]">
            <ul className="flex flex-col items-center gap-[20px]">
              <li className="w-[200px]">
                <Link to={"#home"} className=" hover:text-orange-500 transition text-[16px]">
                  Home
                </Link>
              </li>
              <li className="w-[200px]">
                <a href="#discover" className=" hover:text-orange-500 transition text-[16px]">
                  Discover
                </a>
              </li>
              <li className="w-[200px]">
                <a href="#gallery" className=" hover:text-orange-500 transition text-[16px]">
                  Gallery
                </a>
              </li>
              <li className="w-[200px]">
                <a href="#contacts" className=" hover:text-orange-500 transition text-[16px]">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative mt-12 sm:mt-[0] w-[100%] sm:w-[33%]">
          <div className="absolute left-[8px] -ml-0.5 lg:w-0.5 h-[180px] top-[20px] bg-orange-500"></div>
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
