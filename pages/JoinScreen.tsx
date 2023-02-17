import React from "react";
import Image from 'next/image'
import logo from "../assets/logo.png"


function JoinScreen() {
  return (
    <div className="bg-bg_image bg-cover bg-center bg-no-repeat h-screen md:h-screen">
      <div className="flex-1 place-items-center md:items-center">
      <div className="hidden md:inline-flex my-10 md:ml-10 shadow rounded-sm w-full justify-center">
        <Image src={logo} className="object-none object-center w-45 h-45 ..."  alt={""} width={100} height={100}/>
          </div>
          <div>
            <p >SD Kudya: Entrega de alimentos</p>
            <p>
              Receba comida à sua porta de milhares de restaurantes locais e
              nacionais incríveis.
            </p>
            
          </div>
        </div>
      </div>

  );
}


export default JoinScreen;