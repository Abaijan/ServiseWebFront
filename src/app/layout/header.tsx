import Link from "next/dist/client/app-dir/link";
import Image from "next/image";
import './header.scss';
export const Header = () => {
    return (
        <>
        <section className="bg-black text-center p-[10px] h-[2vh">
            <p className="text-white text-[12px]">Free shipping on all orders over $50</p>
        </section>
        <header className="header   top-0 sticky ">
            <nav className="container">
                <ul className='grid grid-cols-5  items-center justify-around  p-[20px]'>
                   <Link href="/">
                        <Image src='/logo.svg' alt='logo' width={100} height={100} />
                    </Link>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li className="cursor-pointer catalog"> Catalog</li>
                    <div className="flex gap-5 ">
                        <div>
                            <Link href="/signUp">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                                </svg>
                            </Link>
                        </div>
                        <div><Link href="/login">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                            </svg>
                        </Link></div>
                    </div>

                </ul>
            </nav>
        </header>
        </>
    );
};