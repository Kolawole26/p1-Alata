
import Navigation from './Navigation';
import HeaderDetails from './HeaderDetails';

export default function Header() {
    return (
      <header className='h-screen flex justify-center px-40'>
              <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-zoom overflow-hidden"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative w-full">
        <Navigation backgroundColor="bg-white"/>
        <HeaderDetails />
        </div>

      </header>
    );
  }
