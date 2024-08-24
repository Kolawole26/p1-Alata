import Image from 'next/image';
import Button from './Button';

export default function HeaderDetails() {
    return (
      <div className=' flex items-center justify-center h-full'>
        <div>
        <div className=" flex items-center justify-center text-custom-gray mb-8">
        <Image 
            src="/icons/location.svg" 
            alt="Logo" 
            width={18} 
            height={20} 
            className=' mr-2'
        />
        <p>1234, Adedoyin Cresent, Obalende, Lagos, Nigeria</p>
        </div>
        <h1 className=" text-white uppercase mb-8 font-amatic font-bold text-[70px] text-center">
        Experience a Masterpiece with every dish at <span className=' text-custom-red text-stroke-left-white'>ALATA </span>
        </h1>
        <p className=' text-xl text-white max-w-[695px] mb-16 mx-auto'>Indulge in a Symphony of Flavours Crafted with Passion and Precision, Where Each Bite Tells a Story of Artistry and Innovation.</p>
        <div className=' flex justify-center'>
            <Button text="See our menu" iconSrc="/icons/food-pan.svg" />
        </div>
        </div>
      </div>
    );
  }