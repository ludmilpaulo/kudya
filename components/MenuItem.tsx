import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, updateBusket } from "../redux/slices/basketSlice";
import {FaPlus, FaMinus} from "react-icons/fa"

interface Meals {
  foods: any;
  food: any;
  resImage: string;
  resName: string;
  resId: number;
  category: string;
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  short_description: string;
}

const MenuItem = ({ resId, food, resName, resImage, foods }: Meals) => {
  const [isPressed, setIsPressed] = useState(false);

  const setTheQuantity = () => {
    const resIndex = cartItems.findIndex((item) => item.resName === resName);

    if (resIndex >= 0) {
      const menuIndex = cartItems[resIndex].foods.findIndex(
        (item) => item.id === food.id
      );
      if (menuIndex >= 0) {
        console.log("Menu Index => ", menuIndex);
        const menuItem = cartItems[resIndex].foods[menuIndex];
        console.log("Menu Item => ", menuItem);
        setQty(menuItem.quantity);
      }
    }
  };

  useEffect(() => {
    setTheQuantity();
  }, []);
  const [qty, setQty] = useState(0);
  const [restaurantId, setRestaurantId] = useState(resId);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  function quantityUp() {
    // setIsPressed(!isPressed)
    setQty(qty + 1);
   // setIsPressed(!isPressed);
  }

  function quantityDown() {
    if (qty != 1) {
      // setIsPressed(!isPressed);
      setQty(qty - 1);
      setIsPressed(!isPressed);
    }
  }

  const match = (id: any) => {
    const resIndex = cartItems.findIndex((item) => item.resName === resName);
    if (resIndex >= 0) {
      const menuIndex = cartItems[resIndex].foods.findIndex(
        (item) => item.id === id
      );
      if (menuIndex >= 0) return true;
      return false;
    }
    return false;
  };

  const handleAddRemove = (id: any) => {
    const indexFromFood = foods.findIndex((x) => x.id === id);
    const resIndex = cartItems.findIndex((item) => item.resName === resName);
    const foodItem = foods[indexFromFood];
    //foodItem.quantity = qty;
    console.log(foodItem);

    if (resIndex >= 0) {
      const menuIndex = cartItems[resIndex].foods.findIndex(
        (item) => item.id === id
      );
      if (menuIndex >= 0) {
        let oldArrays = [...cartItems];
        let oldfoods = [...oldArrays[resIndex].foods];
        oldfoods.splice(menuIndex, 1);
        oldArrays.splice(resIndex, 1);
        let newArray = [
          ...oldArrays,
          { foods: oldfoods, resName, resImage, resId },
        ];
        dispatch(updateBusket(newArray));
      } else {
        let oldArrays = [...cartItems];
        let newFoodArray = [...oldArrays[resIndex].foods, foodItem];
        oldArrays.splice(resIndex, 1);
        let updatedResArray = [
          ...oldArrays,
          { foods: newFoodArray, resName, resImage, resId },
        ];
        dispatch(updateBusket(updatedResArray));
      }
    } else {
      let oldArrays = [...cartItems];
      let newResFoodArray = [
        ...oldArrays,
        {
          foods: [{ ...foodItem }],
          resName,
          resImage,
          resId,
        },
      ];
      dispatch(updateBusket(newResFoodArray));
    }
  };
  
    return (
        <div className="bg-transparent border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-full relative"
        >
            <h1 className="bg-[#004AAD] border border-bg-[#004AAD] rounded-full text-gray-900 text-2xl font-bold text-center">{food.category}</h1>
            <img  className='w-full h-[200px] object-cover rounded-full' src={food.image} alt={food.name} />
            <div className="flex flex-col items-center my-3 space-y-2">
                <h1 className="text-gray-900 text-lg">{food.name}</h1>
                <FaPlus 
                 onClick={() => quantityUp()}
                className="text-gray-500 text-sm text-center" />{qty}
                <FaMinus
                onClick={() => quantityDown()}
                />
                <h2 className="text-gray-900 text-2xl font-bold">{food.price} Kz</h2>
                <button className="bg-primary text-black px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105" onClick={handleAddRemove}>Order Now</button>
            </div>

            {isPressed &&(

              <div className="flex flex-col items-center my-3 space-y-2">
          
                <p className="text-gray-500 text-sm text-center">{food.quantity}</p>
           
                <button className="bg-primary text-black px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105" onClick={handleAddRemove}>Order Now</button>
            </div>

              )}



        </div>


   

      

    )
}

export default MenuItem