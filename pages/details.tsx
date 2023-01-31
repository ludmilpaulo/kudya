import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import MenuItem from '@/components/MenuItem';
import Skeleton from '@/components/Skeleton';
import Navbar from '@/components/NavBar';
import {
  selectTotalItems,
  selectTotalPrice,
} from "../redux/slice/basketSlice";
import { useSelector } from "react-redux";


interface Meals{
  category: string;
  id : number; 
  image : string; 
  name : string; 
  price : number;
  quantity : number;
  short_description : string;

}



const details = () => {
  const router = useRouter();
    const { restaurantId, image_url, name, address, phone } = router.query;
    const [foods, setFoods] = useState<Meals[]>([]);
    const [menuTab, setMenuTab] = useState(`${foods.category}`)
    const [loading, setLoading] = useState(false)

    const totalPrice = useSelector(selectTotalPrice);
    const getAllItems = useSelector(selectTotalItems);

    useEffect(() => {
      fetchMeals();
      },[]);
   

    const fetchMeals = ()=>{
      fetch(`https://www.sunshinedeliver.com/api/customer/meals/${restaurantId}/`)
          .then((response) => response.json())
          .then((responseJson) => {
            setFoods(responseJson.meals);
            setData(responseJson.meals);
          })
          .catch((error) => {
            console.error(error);
          });
    
     }

    
        

    //loading 
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },1000)
    },[])

    //   Filter Type burgers/pizza/etc
    const filterType = (category: string) => {
      setFoods(
          foods.filter((item) => {
          return item.category === category;
        })
      );
    };

    return (
      

         <div className='bg-cover w-full h-full bg-no-repeat bg-bg_image'>
          <Navbar total={totalPrice} count={getAllItems.length}/>
            {/* food Menu tab  */}

            <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Principais itens do menu
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700'>filtrar por Categoria</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={fetchMeals}
              className='m-1 border-[#004AAD] text-[#004AAD] hover:bg-orange-600 hover:text-white'
            >
              All
            </button>


           {foods.map((item, index) => (
            // eslint-disable-next-line react/jsx-key
            <button
              onClick={() => filterType(item.category)}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              {item.category}
            </button>
            )
            )} 
            
         
          </div>
          </div>
      
          

            {/* all foods  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            {foods?.map((food) => {
              return (
                <MenuItem
                  key={food.id}
                  resId={restaurantId}
                  foods={foods}
                  food={food}
                  resName={name}
                  resImage={image_url}
                />
              );
            })}
            </div>
        </div>
        </div>
      </div>
    )
}

export default details
