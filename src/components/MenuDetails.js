import Button from './Button';
import Link from 'next/link';

export default function MenuDetails() {
    return (
      <div className=' flex items-center justify-center h-full pb-20'>
        <div>
        <div className=' mb-20'>
                <h3 className=' font-amatic font-bold text-[70px] text-custom-red-2 text-center mt-10 mb-6'>Our menu</h3>
                <p className=' text-xl font-montserrat max-w-[936px] text-white text-center mx-auto'>At Alata, we take pride in showcasing the best of Nigerian gastronomy, from beloved classics to innovative interpretations. Each dish is crafted with care and respect for tradition, ensuring an authentic dining experience that transports you to the heart of Nigeria.</p>
            </div>
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-20 mb-12'>
                <div>
                    <h3 className=' font-bold text-[48px] font-amatic text-custom-yellow-2 text-center mb-4'>•Appetisers</h3>
                    <h6 className='font-montserrat text-white font-bold text-center uppercase'>1. SUYA</h6>
                    <p className=' font-montserrat text-white text-center mb-8'>
                    <spa>. </spa>
                    Grilled skewers of spicy marinated beef, chicken, or goat, served with sliced onions and spicy peanut sauce.

                    </p>
                    <h6 className='font-montserrat text-white font-bold text-center uppercase'>2. Akara</h6>
                    <p className=' font-montserrat text-white text-center mb-8'>
                    <spa>. </spa>
                    Deep-fried bean cakes made from black-eyed peas and spices, served with a side of spicy pepper sauce.

                    </p>
                    <h6 className='font-montserrat text-white font-bold text-center uppercase'>3. Peppered Snails</h6>
                    <p className=' font-montserrat text-white text-center'>
                    <spa>. </spa>
                    Succulent snails simmered in a spicy tomato and pepper sauce, served with fried plantains.
                    </p>
                </div>
                <div>
                    <h3 className=' font-bold text-[48px] font-amatic text-custom-yellow-2 text-center mb-4'>•Soups & Stews</h3>
                    <h6 className='font-montserrat text-white font-bold text-center uppercase'>4. Egusi Soup</h6>
                    <p className=' font-montserrat text-white text-center mb-8'>
                    <spa>. </spa>
                    A rich and hearty soup made with ground melon seeds, spinach, and assorted meats or fish, served with pounded yam or fufu.

                    </p>
                    <h6 className='font-montserrat text-white font-bold text-center uppercase'>5. Oha Soup</h6>
                    <p className=' font-montserrat text-white text-center mb-8'>
                    <spa>. </spa>
                    A traditional Igbo soup featuring oha leaves, stockfish, and assorted meats, flavored with palm oil and aromatic spices.

                    </p>
                    <h6 className='font-montserrat text-white font-bold text-center uppercase'>6. Pepper Soup</h6>
                    <p className=' font-montserrat text-white text-center'>
                    <spa>. </spa>
                    A spicy and aromatic broth made with assorted meats or fish, simmered with onions, peppers, and traditional Nigerian spices.
                    </p>
                </div>
                <div>
                    <h3 className=' font-bold text-[48px] font-amatic text-custom-yellow-2 text-center mb-4'>•Main Courses</h3>
                    <h6 className='font-montserrat text-white font-bold text-center uppercase'>7. Jollof Rice</h6>
                    <p className=' font-montserrat text-white text-center mb-8'>
                    <spa>. </spa>
                    Fragrant long-grain rice cooked in a flavorful tomato and pepper sauce, served with your choice of chicken, beef, or fish.

                    </p>
                    <h6 className='font-montserrat text-white font-bold text-center uppercase'>8. Efo Riro</h6>
                    <p className=' font-montserrat text-white text-center mb-8'>
                    <spa>. </spa>
                    A delicious spinach stew cooked with assorted meats or fish, flavored with palm oil, crayfish, and chili peppers.

                    </p>
                    <h6 className='font-montserrat text-white font-bold text-center uppercase'>9. Suya Burger</h6>
                    <p className=' font-montserrat text-white text-center'>
                    <spa>. </spa>
                    A fusion twist on the classic Nigerian suya, featuring a juicy beef or chicken patty marinated in suya spices, topped with lettuce, tomatoes, and onions, served with fries.
                    </p>
                </div>
                <div>
                    <h3 className=' font-bold text-[48px] font-amatic text-custom-yellow-2 text-center mb-4'>•Desserts</h3>
                    <h6 className='font-montserrat text-white font-bold text-center uppercase'>10. Puff Puff</h6>
                    <p className=' font-montserrat text-white text-center mb-8'>
                    <spa>. </spa>
                    Soft and fluffy deep-fried dough balls, sprinkled with powdered sugar for a sweet finish.

                    </p>
                    <h6 className='font-montserrat text-white font-bold text-center uppercase'>11. Buns</h6>
                    <p className=' font-montserrat text-white text-center mb-8'>
                    <spa>. </spa>
                    Sweet and dense fried bread rolls, flavored with cinnamon and nutmeg, perfect for dipping into tea or coffee.

                    </p>
                    <h6 className='font-montserrat text-white font-bold text-center uppercase'>12. Plantain Fritters</h6>
                    <p className=' font-montserrat text-white text-center mb-8'>
                    <spa>. </spa>
                    Ripe plantains sliced and coated in a sweet batter, deep-fried until golden brown, served with a drizzle of honey or caramel sauce.
                    </p>
                    <h6 className='font-montserrat text-white font-bold text-center uppercase'>13. Kunu Aya Smoothie</h6>
                    <p className=' font-montserrat text-white text-center mb-8'>
                    <spa>. </spa>
                    A refreshing and creamy smoothie made from Tigernuts (Aya), coconut milk, dates, and spices, served chilled for a delightful dessert drink.
                    </p>
                    <h6 className='font-montserrat text-white font-bold text-center uppercase'>14. Boli (Grilled Plantains)</h6>
                    <p className=' font-montserrat text-white text-center'>
                    <spa>. </spa>
                    Ripe plantains grilled until caramelized and tender, served with a sprinkle of cinnamon sugar and a dollop of whipped cream or ice cream.
                    </p>
                </div>
                
            </div>
            <div className='flex justify-center'>
                <Link href="/contactUs">
                    <Button text="Contact the Chef" iconSrc="/icons/man-cook.svg"/>
                </Link>
            </div>
        </div>
      </div>
    );
  }