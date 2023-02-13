import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

const Navbar = ({ total, count }: { total: any; count: any }) => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
        {/* Left side */}
        <div className="flex items-center">
          <div onClick={() => setNav(!nav)} className="cursor-pointer">
            <AiOutlineMenu size={30} />
          </div>
          <h1 className="h2-2xl sm:h2-3xl lg:h2-4xl px-2">
            Best <span className="font-bold">Eats</span>
          </h1>
          <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 h2-[14px]">
            <p className="bg-black h2-white rounded-full p-2">Delivery</p>
            <p className="p-2">Pickup</p>
          </div>
        </div>

        {/* Cart button */}
        {!!count && (
        <button className="bg-black text-white h2-white hidden md:flex items-center py-2 rounded-full">
          <BsFillCartFill size={20} className="mr-2" /> {total}Kz ({count})
        </button>
        )}

        {/* Overlay */}
        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}

        {/* Side drawer menu */}
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
              : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
          }
        >
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            size={30}
            className="absolute right-4 top-4 cursor-pointer"
          />
          <h2 className="h2-2xl p-4">
            SD <span className="font-bold">Kudya</span>
          </h2>
          <nav>
            <ul className="flex flex-col p-4 h2-gray-800">
              <li className="h2-xl py-4 flex">
                <TbTruckDelivery size={25} className="mr-4" /> Pedidos
              </li>
              <li className="h2-xl py-4 flex">
                <MdFavorite size={25} className="mr-4" /> Favoritos
              </li>
              <li className="h2-xl py-4 flex">
                <FaWallet size={25} className="mr-4" /> Carteira
              </li>
              <li className="h2-xl py-4 flex">
                <MdHelp size={25} className="mr-4" /> Ajuda
              </li>
              <li className="h2-xl py-4 flex">
                <AiFillTag size={25} className="mr-4" /> Promoções
              </li>
              <li className="h2-xl py-4 flex">
                <BsFillSaveFill size={25} className="mr-4" /> Melhores
              </li>
              <li className="h2-xl py-4 flex">
                <FaUserFriends size={25} className="mr-4" /> Invite Friends
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
