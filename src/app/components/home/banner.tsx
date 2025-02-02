import Image from 'next/image';


export function Banner() {
    return (
        <section className="w-full">
            <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-center h-[800px]">
                <section>
                    <h1 className="text-[50px] font-bold">
                        Welcome to <span className="text-[#f5c312]">FastMart</span>
                    </h1>
                        <p className="mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Est et magnam minima pariatur possimus sapiente sed. Architecto expedita harum non?
                        </p>
                </section>
                    <section className="w-[40vw] h-[300px] relative">

                            <Image
                                className="hover:scale-110 w-[500px] hover:transition hover:ease-out  hover:duration-700 duration-1000 absolute left-[20%]"
                                src="/images/home/slide1.svg"
                                alt="Banner slide 1"
                                width={1000}
                                height={200}
                            />
                            <Image
                                className="hover:scale-110 w-[500px] hover:transition hover:ease-out hover:duration-700 duration-1000 absolute top-20 z-10"
                                src="/images/home/slide2.svg"
                                alt="Banner slide 2"
                                width={1000}
                                height={500}
                            />
                    </section>
            </section>
        </section>
);
}
