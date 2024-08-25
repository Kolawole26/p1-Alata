import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css'; // Import the lightbox styles

export default function Gallery() {
      // Array of image paths
  const imagePaths = [
    '/images/gallery-1.png', // Ensure these paths are correct and match your public folder structure
    '/images/gallery-2.png',
    '/images/gallery-3.png',
    '/images/gallery-4.png',
    '/images/gallery-5.png',
    '/images/gallery-6.png',
    '/images/gallery-7.png',
    '/images/gallery-8.png',
    '/images/gallery-9.png',
    '/images/gallery-10.png',
  ];

    // State to control lightbox visibility and the index of the selected image
    const [open, setOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className='bg-custom-off-white'>
      <SEO title="Gallery Page" description="Welcome to the homepage of My Website, where you can find amazing content." />
      <div className="relative w-full px-40 pb-32 ">
      <Navigation backgroundColor="bg-black"/>
      <div className=' mb-20'>
                <h3 className=' font-amatic font-bold text-[70px] text-custom-red text-center mt-10 mb-6'>Gallery</h3>
                <p className=' text-xl font-montserrat max-w-[936px] text-custom-gray-2 text-center mx-auto'>Welcome to Alata, where culinary excellence meets unforgettable dining experiences. Founded with a passion for creating exceptional dishes that delight the senses, our restaurant is a haven for food enthusiasts seeking memorable gastronomic adventures.</p>
            </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 mb-12">
        {imagePaths.map((path, index) => (
          <div
            key={index}
            className={`relative w-full ${
              index === 3 ? 'col-span-1 sm:col-span-2 md:col-span-3 h-64' : 'h-64'
            }`}
            onClick={() => {
              setPhotoIndex(index);
              setOpen(true);
            }}
          >
            <Image
              src={path}
              alt={`Gallery image ${index + 1}`}
              layout="fill" // Make image fill its container
              objectFit="cover" // Ensure the image covers the div without being stretched
              className="rounded-lg shadow-md cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Component */}
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={imagePaths.map((src) => ({ src }))}
          index={photoIndex}
          on={{
            viewIndexChange: (index) => setPhotoIndex(index),
          }}
        />
      )}
      <div className='flex justify-center'>
                <Link href="/contactUs">
                    <Button text="Contact the Chef" iconSrc="/icons/man-cook.svg"/>
                </Link>
            </div>
      </div>
    </div>
  );
}
