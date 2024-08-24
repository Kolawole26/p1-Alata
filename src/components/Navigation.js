import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

export default function Navigation({ backgroundColor }) {
    return (
        <div className={`flex items-center justify-between relative ${backgroundColor} rounded-b-lg py-2 px-4`}>
        <nav className=''>
        <ul className=' flex items-center'>
            <li className=' p-1 mr-4'>
            <Link href="/aboutUs" className=' font-bold text-custom-red hover:text-custom-yellow transition-colors duration-300'>
                About us
            </Link>
            </li>
            <li className=' p-1 mr-4'>
            <Link href="/menu" className=' font-bold text-custom-red hover:text-custom-yellow transition-colors duration-300'>
                Menu
            </Link>
            </li>
            <li className=' p-1'>
            <Link href="/gallery" className=' font-bold text-custom-red hover:text-custom-yellow transition-colors duration-300'>
                Gallery
            </Link>
            </li>
        </ul>
        </nav>
        <div>
            <Image 
            src="/icons/logo.svg" 
            alt="Logo" 
            width={59.79} 
            height={60} 
        />
        </div>
        <div>
            <Link href="/contactUs">
                <Button text="Contact the Chef" iconSrc="/icons/man-cook.svg"/>
            </Link>
        </div>
    </div>
    );
  }
