import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { selectCartItems, updateBusket } from "../redux/slices/basketSlice";


import colors from "../configs/colors";

const CartItems = () => {
  const all = useSelector(selectCartItems);

  let allCartItems = all;

  const dispatch = useDispatch();

  const match = (id, resName) => {
    const resIndex = allCartItems.findIndex((item) => item.resName === resName);
    if (resIndex >= 0) {
      const menuIndex = allCartItems[resIndex].foods.findIndex(
        (item) => item.id === id
      );
      if (menuIndex >= 0) return true;
      return false;
    }
    return false;
  };

  const handleRemove = (id, resName, resImage) => {
    const resIndex = allCartItems.findIndex((item) => item.resName === resName);

    if (resIndex >= 0) {
      const menuIndex = allCartItems[resIndex].foods.findIndex(
        (item) => item.id === id
      );
      if (menuIndex >= 0) {
        let oldArrays = [...allCartItems];
        let oldfoods = [...oldArrays[resIndex].foods];
        oldfoods.splice(menuIndex, 1);
        oldArrays.splice(resIndex, 1);
        let newArray = oldfoods.length
          ? [...oldArrays, { foods: oldfoods, resName, resImage }]
          : oldArrays;
        dispatch(updateBusket(newArray));
      }
    }
  };

  return (
    <>
      {!!!allCartItems?.length && (
        <p className="p-center p-black">
          Nenhum item do carrinho!
        </p>
      )}
      {allCartItems?.map((item) => (
        <div key={item.resName} className="mb-4">
          <div className="mb-4 relative justify-center">
            <img
              className="w-full h-16 rounded-lg"
              src={item.resImage}
            />
            <div
             className="absolute top-0 left-0 w-full h-full bg-black rounded-lg"
            />
            <p
              className="absolute self-center p-white w-3/4 p-center font-bold p-xl"
              numberOfLines={1}
            >
              {item.resName}
            </p>
          </div>
          {item?.foods?.map((food) => (
            <div
              className="mb-3 flex-row justify-between items-center pb-3 border-b border-gray-100"
              key={food.id}
            >
              <div className="flex-1 pr-3 flex-row items-center">
            

                <div className="flex-1 pl-2">
                  <p
                    className="p-gray-900 font-bold mb-1"
                   
                  >
                    {food.name}
                  </p>
                  <p className="p-gray-800 p-xs">
                    {food.price}Kz
                  </p>
                  <p className="p-gray-600 p-xs">
                    {food.short_description}
                  </p>
                </div>
              </div>
              <div className="">
                <img
                  className="h-16 w-16 rounded-lg"
                  src={food?.image}
                    alt={food?.name}
                />
              </div>
            </div>
          ))}
        </div>
      ))}

      </>
 
  );
};



export default CartItems;