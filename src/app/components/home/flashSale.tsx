'use client';
import { motion } from "framer-motion";
import Image from 'next/image';


 const cards = [
     {
         id: 1,
         category: "Mens Clothing",
         image: "/images/home/mens.png.webp",
         title: "New Arrivals",
     },
     {
         id: 2,
         category: "Womens Clothing",
         image: "/images/home/womens.jpg",
         title: "New Arrivals",
     },
     {
         id: 3,
         category: "Kids Clothing",
         image: "/images/home/kids.jpg",
         title: "New Arrivals",
     },
     {
         id:4,
         category: "Accessories",
         image: "/images/home/assecories.png",
         title: "New Arrivals",
     },
     {
         id: 5,
         category: "Shoes",
         image: "/images/home/men-nike-sports-shoes.jpeg",
         title: "New Arrivals",
     }
 ]
export default function FlashSale() {
    return (
        <main className="flex h-[100vh]  flex-col items-center justify-center p-24">
           <motion.div transition={{duration : 1}} variants={
               {
                   hidden: {
                       opacity: 0,
                       x: -200,
                   },
                   show: {
                       opacity: 1,
                       x: 0,
                   }
               }
           }>
               <div className=" text-center items-center justify-center text-white">
                   <Image src='/images/home/sale.svg' alt='flashSale' width={500} height={200} />
               </div>
               <div className="text-red-500 justify-center items-center mt-[30px] font-extrabold">
                   <h3 className=" ml-10 text-[30px] my-0 mt-auto">Discounts up to 70%!</h3>
               </div>
           </motion.div>
            <div className="flex max-w-[1440px] h-[340px] overflow-x-scroll croll-y-none  gap-5 my-[30px]">
                    {
                        cards.map((item) => (
                <motion.div
                    key={item.id} className="z-10 mt-[20px] hover:scale-110 transition duration-500" transition={{duration: item.id * 0.2 }} variants={
                    {
                        hidden: {
                            opacity: 0,
                            y: 300,
                        },
                        show: {
                            opacity: 1,
                            y: 0,
                            animation: "spring(1, 80, 10, 0)",
                        }
                    }
                }
                   initial="hidden" whileInView="show" exit="hidden"
                >
                            <div className="bg-cover bg-center items-center">
                                <Image className="rounded-2xl w-[250px] cursor-pointer h-[300px]   object-center object-cover" width={200} height={300} src={item.image} alt={item.category}/>
                            </div>
                </motion.div>
                        ))
                    }
            </div>

        </main>
    );
}