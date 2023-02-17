import React from "react";
import Image from 'next/image'
import { motion } from "framer-motion"
import logo from "../assets/logo.png"
import Link from "next/link";


function JoinScreen() {
  return (
  
     <div className="bg-bg_image bg-cover bg-center bg-no-repeat">
       <Link
              href={{
                pathname: "/LoginScreenUser"}}>
      <div  className="flex flex-col items-center md:inline-flex my-10 md:ml-10 rounded-sm w-full justify-center">
      <motion.div
          animate={{
              scale: [1, 1, 1, 1, 1],
              rotate: [0, 30, 60, 240, 360],
          }}
        >

        <Image src={logo} className="object-none object-center"  alt={""} />
        <motion.h1
                animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.2 }}
                className="text-center"
            >
            <p >SD Kudya: Entrega de alimentos</p>
            <p>
              Receba comida à sua porta de milhares de restaurantes locais e
              nacionais incríveis.
            </p>
            
          </motion.h1>
          </motion.div>
          <div className="mt-8 w-full">
                        <button role="button" aria-label="create my account" className="focus:ring-2 focus:ring-offset-2 focus:[#004AAD] text-sm font-semibold leading-none text-white focus:outline-none bg-[#004AAD] border rounded hover:bg-[#004AAD] py-4 w-full">
                        Let's go
                        </button>
                    </div>
         </div>
         </Link>
      </div>
    

  );
}


export default JoinScreen;