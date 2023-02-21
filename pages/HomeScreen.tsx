import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser, selectUser } from "../redux/slices/authSlice";

import React, { useState, useEffect } from "react";
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

import RestaurantItem from "@/components/RestaurantItem";
import Hero from "@/components/Hero";
import { data } from "@/configs/data";
import Footer from "@/components/Footer";

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
      const res = await fetch(`https://www.sunshinedeliver.com/api/customer/restaurants/`)
    const restaurant = await res.json()
  
    // Pass data to the page via props
    return { props: { restaurant} }
  }

type Props = {
    id: number;
    name: string;
    phone: number;
    address: string;
    logo: string;

}

const HomeScreen = (restaurant: Props) => {

    const [restaurantData] = useState(restaurant);
    const [search, setSearch] = useState("");
    const [nav, setNav] = useState(false);

    console.log("restaurant data", restaurantData)

   

    function searchFilterFunction(text: React.ChangeEvent<HTMLInputElement>): void {
        throw new Error("Function not implemented.");
    }

  return (
    <>
    <div className="bg-bg_image bg-cover bg-center bg-no-repeat h-screen md:h-screen">
      <Hero resData={data} />
      <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
        {/* Left side */}
        <div className="flex items-center">
          <div onClick={() => setNav(!nav)} className="cursor-pointer">
            <AiOutlineMenu size={30} />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
            Melhores <span className="font-bold">Refeições</span>
          </h1>
          <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
            <p className="bg-black text-white rounded-full p-2">Delivery</p>
            <p className="p-2">Pickup</p>
          </div>
        </div>

        {/* Search Input */}
        <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
          <AiOutlineSearch size={25} />
          <input
            className="bg-transparent p-2 w-full focus:outline-none"
            type="text"
            placeholder="Pesquisar Restaurantes"
            value={search}
            onChange={(text) => searchFilterFunction(text)}
          />
        </div>
        {/* Cart button */}
        <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
          <BsFillCartFill size={20} className="mr-2" /> Cart
        </button>

        {/* Mobile Menu */}
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
          <h2 className="text-2xl p-4">
            Melhores <span className="font-bold">Refeições</span>
          </h2>
          <nav>
            <ul className="flex flex-col p-4 text-gray-800">
              <li className="text-xl py-4 flex">
                <TbTruckDelivery size={25} className="mr-4" /> Pedidos
              </li>
              <li className="text-xl py-4 flex">
                <MdFavorite size={25} className="mr-4" /> Favoritos
              </li>
              <li className="text-xl py-4 flex">
                <FaWallet size={25} className="mr-4" /> Carteira
              </li>
              <li className="text-xl py-4 flex">
                <MdHelp size={25} className="mr-4" /> Ajuda
              </li>
              <li className="text-xl py-4 flex">
                <AiFillTag size={25} className="mr-4" /> Promoções
              </li>
              <li className="text-xl py-4 flex">
                <BsFillSaveFill size={25} className="mr-4" /> Best Ones
              </li>
              <li className="text-xl py-4 flex">
                <FaUserFriends size={25} className="mr-4" /> Convide amigos
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        {/* Card */}

       
      </div>
    </div>
    <Footer />
  </>
  )
}



export default HomeScreen