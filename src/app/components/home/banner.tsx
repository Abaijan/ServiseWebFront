'use client';
import Image from 'next/image';
import { Variants } from "framer-motion";
import { motion } from "framer-motion";

export function Banner() {


    return (
        <section className="w-full">
            <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-center h-[100vh]">
                <section>
                <motion.div variants={
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
                }
                            transition={{duration: 1.2}}
                            viewport={{once: true, amount: 0.5}}
                            initial="hidden"
                            whileInView="show"
                            exit="hidden"
                >
                    <h1 className="text-[50px] font-bold">
                        Welcome to <span className="text-[#f5c312]">FastMart</span>
                    </h1>
                </motion.div>
                    <motion.div variants={
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

                    }
                                transition={{duration: 1}}
                                viewport={{once: true, amount: 0.5}}
                                initial="hidden"
                                whileInView="show"
                                exit="hidden"
                                className="mt-5"
                    >
                        <p className="mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Est et magnam minima pariatur possimus sapiente sed. Architecto expedita harum non?
                        </p>
                    </motion.div>
                </section>
                    <section className="w-[40vw] h-[300px] relative">
                        <motion.div
                            transition={{duration: 1}}
                            initial="hidden"
                            whileInView="show"
                            exit="hidden"
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 200,
                                },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                },
                            }}
                            viewport={{once: true, amount: 0.5}}
                        >
                            <Image
                                className="absolute left-[20%]"
                                src="/images/home/slide1.svg"
                                alt="Banner slide 1"
                                width={600}
                                height={300}
                                layout="intrinsic"
                            />
                        </motion.div>
                        <motion.div transition={{duration: 1.4}} initial="hidden" whileInView="show" exit="hidden"
                                    variants={{
                                        hidden: {
                                            opacity: 0,
                                            x: 200,
                                        },
                                        show: {
                                            opacity: 1,
                                            x: 0,
                                        }
                                    }} viewport={{once: true, amount: 0.5}}>

                            <Image
                                className="absolute top-20 z-10"
                                src="/images/home/slide2.svg"
                                alt="Banner slide 2"
                                width={600}
                                height={300}
                                layout="intrinsic"
                            />
                        </motion.div>
                    </section>
            </section>
        </section>
);
}
