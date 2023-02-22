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
import background from "../assets/bg.png";
import RestaurantItem from "@/components/RestaurantItem";

import { data } from "@/configs/data";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  const router = useRouter();
  const user = useSelector(selectUser);

  useEffect(() => {
    console.log("user==>>", user);
    if (user == null) {
      router.push("/JoinScreen");
    }else{
      router.push("/HomeScreen");

    }
  }, []);
  return (
    <>
    

         
    </>
  );
}

