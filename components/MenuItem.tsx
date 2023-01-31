import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, updateBusket } from "../redux/slice/basketSlice";


const MenuItem = ({ resId, food, resName, resImage, foods } : { resId:any, food:any, resName:any, resImage:any, foods:any }) => {

  const [qty, setQty] = useState<any>(1);
  const [restaurantId, setRestaurantId] = useState(resId);

  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();


    const setTheQuantity = () => {
        const resIndex = cartItems.findIndex((item : any) => item.resName === resName);
    
        if (resIndex >= 0) {
          const menuIndex = cartItems[resIndex].foods.findIndex(
            (item : any) => item.id === food.id
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
    
    
      
    
      function quantityUp() {
        setQty(qty + 1);
       //setTheQuantity();
      }
    
      function quantityDown() {
        if (qty != 1) {
          setQty(qty - 1);
        // setTheQuantity();
        }
      }
    
      const match = (id: any) => {
        const resIndex = cartItems.findIndex((item : any) => item.resName === resName);
        if (resIndex >= 0) {
          const menuIndex = cartItems[resIndex].foods.findIndex(
            (item : any) => item.id === id
          );
          if (menuIndex >= 0) return true;
          return false;
        }
        return false;
      };
    
      const handleAddRemove = (id: any) => {
        console.log("quatidde==>", qty) 
    
      
    
        const indexFromFood = foods.findIndex((x:any) => x.id === id);
        const resIndex = cartItems.findIndex((item:any) => item.resName === resName);
        const foodItem = foods[indexFromFood];
       // foodItem.quantity = qty;
        //setQty(foodItem.quantity);
        console.log('foods item',foodItem);
    
        if (resIndex >= 0) {
          const menuIndex = cartItems[resIndex].foods.findIndex(
            (item:any) => item.id === id
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
            console.log('nova array',newArray)
            dispatch(updateBusket(newArray));
          } else {
            let oldArrays = [...cartItems];
          
            let newFoodArray = [...oldArrays[resIndex].foods, foodItem ];
            oldArrays.splice(resIndex, 1);
           // foodItem.quantity = qty;
            let updatedResArray = [
              ...oldArrays,
              { foods: newFoodArray, resName, resImage, resId },
            ];
            console.log('updated ', updatedResArray)
            dispatch(updateBusket(updatedResArray));
          }
        } else {
          let oldArrays = [...cartItems];
          //foodItem.quantity = qty;
          let newResFoodArray = [
            ...oldArrays,
            {
              foods: [{ ...foodItem}],
              resName,
              resImage,
              resId,
            },
          ];
          dispatch(updateBusket(newResFoodArray));
        }
      };
   

  
    return (
        <div className="bg-transparent border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-full relative">
            <h1 className="bg-[#004AAD] border border-bg-[#004AAD] rounded-full text-gray-900 text-2xl font-bold text-center">{food.category}</h1>
            <img  className='w-full h-[200px] object-cover rounded-full' src={food.image} alt={food.name} />
            <div className="flex flex-col items-center my-3 space-y-2">
                <h1 className="text-gray-900 text-lg">{food.name}</h1>
                <p className="text-gray-500 text-sm text-center">{food.short_description}</p>
                <h2 className="text-gray-900 text-2xl font-bold">{food.price} Kz</h2>
                <button className="bg-primary text-black px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105" onClick={handleAddRemove}>Order Now</button>
            </div>
        </div>
    )
}

export default MenuItem