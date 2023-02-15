import React, { useState } from "react";

import {
  selectTotalItems,
  selectTotalPrice,
} from "../redux/slices/basketSlice";
import { useSelector } from "react-redux";
import colors from "../configs/colors";
import CartItem from "../components/CartItem";
import Hero from "@/components/Hero";



import { selectCartItems, updateBusket } from "../redux/slices/basketSlice";



const cartSreen = () => {
  const totalPrice = useSelector(selectTotalPrice);
  const getAllItems = useSelector(selectTotalItems);
  const all = useSelector(selectCartItems);

  let allCartItems = all;
  const [modalVisible, setModalVisible] = useState(false);

  return (<div className="flex-1 bg-cover w-full h-full bg-no-repeat bg-bg_image" >
        < Hero resData={allCartItems}/>
   
      <div className="flex-1">
        <CartItem />
      </div>
  
   
    </div>
  );
};



export default cartSreen;