import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button';
import Form from '../components/Form';

export default function ContactUs() {
  return (
    <main className='bg-custom-off-white'>
      <SEO title="Contact Us Page" description="Welcome to the homepage of My Website, where you can find amazing content." />
      <div className="relative w-full px-40 pb-32 ">
        <Navigation backgroundColor="bg-black"/>
        <div className='relative'>
                <div className=' mb-24'>
                    <h3 className=' font-amatic font-bold text-[70px] text-custom-red text-center mt-10 mb-6'>Contact us</h3>
                    <p className=' text-xl font-montserrat max-w-[936px] text-custom-gray-2 text-center mx-auto'>We'd love to hear from you! Whether you have questions about our menu, want to book a reservation, or simply want to say hello, feel free to reach out to us using the contact information below.</p>
                </div>
                <section className=' mx-20'>
                <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-24 px-20 mb-16'>
                    <div>
                    <h3 className=' font-amatic font-bold text-[48px] text-custom-yellow-2 mt-10 mb-4 uppercase'>Contact</h3> 
                    <div className=' font-montserrat mb-5'>
                        <p className=' font-bold'>Location</p>
                        <span>1234, Adedoyin Cresent, Obalende, Lagos, Nigeria</span>
                    </div>
                    <div className=' font-montserrat mb-5'>
                        <p className=' font-bold'>Phone number</p>
                        <span>+234 3456 786</span>
                    </div>
                    <div className=' font-montserrat'>
                        <p className=' font-bold'>Email address</p>
                        <span>alatafoods@mail.com</span>
                    </div>
                    </div>
                    <div>
                    <h3 className=' font-amatic font-bold text-[48px] text-custom-yellow-2 mt-10 mb-4 uppercase'>Opening hours</h3> 
                    <div className=' font-montserrat mb-5'>
                        <p className=' font-bold'>Open from 07:00-23:30</p>
                        <p>Monday: 07:00-22:00</p>
                        <p>Tuesday: 07:00-22:00</p>
                        <p>Wednesday: 07:00-22:00</p>
                        <p>Thursday: 07:00-23:30</p>
                        <p>Friday: 07:00-23:30</p>
                        <p>Saturday: 07:00-23:30</p>
                        <p>Sunday: 07:00-23:30</p>
                    </div>
                    </div>
                    <div>
                    <h3 className=' font-amatic font-bold text-[48px] text-custom-yellow-2 mt-10 mb-4 uppercase'>socials</h3> 
                    <div className=' font-montserrat mb-5'>
                        <p className=' font-bold mb-4 underline uppercase'>Instagram</p>
                        <p className=' font-bold mb-4 underline uppercase'>Twitter (X)</p>
                        <p className=' font-bold mb-4 underline uppercase'>TIKTOK</p>
                        <p className=' font-bold mb-4 underline uppercase'>Facebook</p>
                    </div>
                    </div>
                </div>
                <div className='px-20'>
                <h3 className=' font-amatic font-bold text-[48px] text-custom-yellow-2 mt-10 mb-4 uppercase'>enquire the chef</h3>  
                <Form />
                </div>
                </section>

                <div className=' absolute top-0 -left-32'>
                <Image 
                src="/icons/contact-1.svg" 
                alt="Contact image" 
                width={275} 
                height={275} 
                />
            </div>
                <div className=' absolute top-64 -right-20'>
                <Image 
                src="/icons/contact-2.svg" 
                alt="Contact image" 
                width={295} 
                height={295} 
                />
            </div>
            <div className='absolute top-2/4 -left-36'>
                <Image 
                src="/icons/contact-3.svg" 
                alt="Contact image" 
                width={295} 
                height={295} 
                />
            </div>
            <div className=' absolute top-3/4 -right-36'>
                <Image 
                src="/icons/contact-4.svg" 
                alt="Contact image" 
                width={273} 
                height={273} 
                />
            </div>
            </div>
        </div>
    </main>
  );
}
