import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button';

export default function AboutUs() {
  return (
    <div className='bg-custom-off-white'>
      <SEO title="About Us Page" description="Welcome to the homepage of My Website, where you can find amazing content." />
      <div className="relative w-full px-40 pb-32 ">
        <Navigation backgroundColor="bg-black"/>
        <div className='relative'>
            <div className=' mb-20'>
                <h3 className=' font-amatic font-bold text-[70px] text-custom-red text-center mt-10 mb-6'>About us</h3>
                <p className=' text-xl font-montserrat max-w-[936px] text-custom-gray-2 text-center mx-auto'>Welcome to Alata, where culinary excellence meets unforgettable dining experiences. Founded with a passion for creating exceptional dishes that delight the senses, our restaurant is a haven for food enthusiasts seeking memorable gastronomic adventures.</p>
            </div>
            <div className=' mb-20'>
                <h3 className=' font-amatic font-bold text-[48px] text-custom-yellow-2 text-center mt-10 mb-6'>Our Story</h3>
                <p className=' text-xl font-montserrat max-w-[746px] text-black text-center mx-auto'>At Alata, our journey began with a simple yet profound love for food. With years of culinary exploration and dedication to the craft, our anonymous chef honed their skills in kitchens around the world, soaking up diverse flavours and techniques along the way.
                Driven by a desire to share their culinary creations with the world, our chef envisioned a dining destination where every dish tells a story, where every bite ignites the taste buds, and where every guest feels like family. Thus, Alata was born—a culmination of passion, expertise, and a relentless pursuit of perfection.</p>
            </div>
            <div className=' mb-20'>
                <h3 className=' font-amatic font-bold text-[48px] text-custom-yellow-2 text-center mt-10 mb-6'>Our Philosophy</h3>
                <p className=' text-xl font-montserrat max-w-[746px] text-black text-center mx-auto'>At the heart of Alata lies a commitment to excellence in every aspect of the dining experience. From sourcing the finest ingredients to crafting each dish with precision and care, we believe in upholding the highest standards of quality and flavour.
                We embrace innovation while honouring tradition, blending classic techniques with modern flair to create dishes that surprise and delight. Our menu reflects a dedication to seasonality and sustainability, ensuring that every ingredient shines in its freshest, most vibrant form.</p>
            </div>
            <div className=' mb-12'>
                <h3 className=' font-amatic font-bold text-[48px] text-custom-yellow-2 text-center mt-10 mb-6'>Meet the Chef</h3>
                <p className=' text-xl font-montserrat max-w-[746px] text-black text-center mx-auto'>While our chef prefers to let their culinary creations speak for themselves, their dedication and expertise are evident in every dish that graces our tables. With a background steeped in culinary tradition and a passion for pushing the boundaries of flavour, our chef is a true artist in the kitchen, weaving together ingredients and inspiration to craft culinary masterpieces.</p>
            </div>
            <div className='flex justify-center mb-12'>
                <Image 
                src="/images/chefs.png" 
                alt="Chefs" 
                width={807.55} 
                height={451.78} 
                />
            </div>
            <div className='flex justify-center'>
                <Link href="/contactUs">
                    <Button text="Contact the Chef" iconSrc="/icons/man-cook.svg"/>
                </Link>
            </div>

            <div className=' absolute top-0 -left-20'>
                <Image 
                src="/icons/pepper.svg" 
                alt="Pepper" 
                width={275} 
                height={275} 
                />
            </div>
            <div className=' absolute top-48 -right-20'>
                <Image 
                src="/icons/beef.svg" 
                alt="Beef" 
                width={189} 
                height={189} 
                />
            </div>
            <div className='absolute top-1/4 left-2'>
                <Image 
                src="/icons/crab.svg" 
                alt="Crab" 
                width={215} 
                height={174} 
                />
            </div>
            <div className=' absolute top-1/3 -right-32'>
                <Image 
                src="/icons/spice.svg" 
                alt="Spice" 
                width={275} 
                height={275} 
                />
            </div>
            <div className='absolute top-2/4 -left-20'>
                <Image 
                src="/icons/bell-pepper.svg" 
                alt="Bell Pepper" 
                width={275} 
                height={275} 
                />
            </div>
        </div>
        
        </div>
    </div>
  );
}
