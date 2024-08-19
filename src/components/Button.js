import Image from 'next/image';

export default function Button({ text, iconSrc, onClick }) {
    return (
      <button className=' flex items-center py-3 px-6 bg-custom-red rounded-[100px] hover:bg-custom-yellow transition-colors duration-300'>
        <span className='font-bold text-white mr-2'>
            {text}
        </span>
        <span>
            <Image src={iconSrc} alt="" width={24} height={24} />
        </span>
      </button>
    );
  }