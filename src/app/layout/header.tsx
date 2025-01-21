import Link from "next/dist/client/app-dir/link";
import Image from "next/image";
import './header.scss';
export const Header = () => {
    return (
        <>
        <section className="bg-black text-center p-[10px] h-[2vh">
            <p className="text-white text-[12px]">Free shipping on all orders over $50</p>
        </section>
        <header className="header top-0 sticky ">
            <nav className="container">
                <ul className='grid grid-cols-5  items-center   p-[20px]'>
                   <Link href="/">
                        <Image src='/logo.svg' alt='logo' width={100} height={100} />
                    </Link>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li className="cursor-pointer catalog"> Catalog</li>
                    <div className="flex gap-5 ">
                        <div>
                            <li>
                                <Link id="nav-logo" href="/signUp">
                                    <Image src='/icons/signUp-logo.svg' alt="signUp-logo" width={30} height={30} />
                                </Link>
                            </li>
                        </div>
                        <div>
                            <li>
                            <Link id="nav-logo" href="/login">
                                <Image src='/icons/signIn-logo.svg' alt="signUp-logo" width={30} height={30} />
                            </Link>
                            </li>
                        </div>
                    </div>

                </ul>
            </nav>
        </header>
        </>
    );
};