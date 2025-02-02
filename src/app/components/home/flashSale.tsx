
import Image from 'next/image';

interface CardProps {
    id: number;
    category: string;
    image: string;
    title: string;
}

export default async function FlashSale() {
    const cards  = await fetch(process.env.SERVER_HOST + '/mainPageCards', {method : 'GET'}).then(res => res.json());
    return (
        <main className="flex h-[100vh]  flex-col items-center justify-center p-24">

               <div className=" text-center items-center justify-center text-white">
                   <Image src='/images/home/sale.svg' alt='flashSale' width={500} height={200} />
               </div>
               <div className="text-red-500 justify-center items-center mt-[30px] font-extrabold">
                   <h3 className=" ml-10 text-[30px] my-0 mt-auto">Discounts up to 70%! <br/> <span className="text-yellow-700">For next categories:</span>   </h3>
               </div>
            <div className="flex max-w-[1440px] h-[340px] overflow-x-scroll croll-y-none  gap-5 my-[30px]">
                    {
                        cards.map((item: CardProps, index : number) => (
                            <div key={index} className="bg-cover bg-center w-[250px] h-[300px] relative items-center hovered ">
                                <div className="category-backdrop">{item.category}</div>
                                <Image className="rounded-2xl w-[250px] cursor-pointer h-[300px]   object-center object-cover" width={200} height={300} src={item.image} alt={item.category}/>
                            </div>
                        ))
                    }
            </div>
        </main>
    );
}