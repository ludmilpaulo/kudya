import React from 'react';


const MenuItem = ({ resId, food, resName, resImage, foods } : { resId:any, food:any, resName:any, resImage:any, foods:any }) => {
   

  
    return (
        <div className="bg-transparent border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-full relative">
            <h1 className="bg-[#004AAD] border border-bg-[#004AAD] rounded-full text-gray-900 text-2xl font-bold text-center">{food.category}</h1>
            <img  className='w-full h-[200px] object-cover rounded-full' src={food.image} alt={food.name} />
            <div className="flex flex-col items-center my-3 space-y-2">
                <h1 className="text-gray-900 text-lg">{food.name}</h1>
                <p className="text-gray-500 text-sm text-center">{food.short_description}</p>
                <h2 className="text-gray-900 text-2xl font-bold">{food.price} Kz</h2>
                <button className="bg-primary text-black px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">Order Now</button>
            </div>
        </div>
    )
}

export default MenuItem