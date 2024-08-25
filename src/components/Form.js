import Button from '../components/Button';

export default function Form({  }) {
    return (
        <form>
            <div className=" font-montserrat flex items-center gap-x-4 mb-8">
                <div className=" w-full">
                    <label className=" font-semibold text-sm text-black mb-2">Full Name <span className=" text-red-600">*</span></label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full px-3 py-3 bg-transparent border border-[#282828] rounded-[100px] shadow-sm focus:outline-none focus:ring-2 focus:custom-yellow-2 focus:border-transparent placeholder-gray-500"
                    />
                </div>
                <div className=" w-full">
                    <label className=" font-semibold text-sm text-black mb-2">Email Address <span className=" text-red-600">*</span></label>
                    <input
                        type="text"
                        placeholder="Enter your email address"
                        className="w-full px-3 py-3 bg-transparent border border-[#282828] rounded-[100px] shadow-sm focus:outline-none focus:ring-2 focus:custom-yellow-2 focus:border-transparent placeholder-gray-500"
                    />
                </div>
            </div>
            <div className=" w-full mb-8">
                    <label className=" font-semibold text-sm text-black mb-2">Your Message <span className=" text-red-600">*</span></label>
                    <textarea
        placeholder="Enter your message"
        className="w-full px-3 py-3 bg-transparent border border-[#282828] rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:custom-yellow-2 focus:border-transparent placeholder-gray-500"
        rows="7"
      ></textarea>
    </div>
    <div className=''>
                <Button text="Send message" iconSrc="/icons/email.svg"/>
            </div>
        </form>
    );
  }