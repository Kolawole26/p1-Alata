
import Navigation from './Navigation';
import HeaderDetails from './HeaderDetails';

export default function Header() {
    return (
      <header className='header h-screen flex justify-center px-40'>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative w-full">
        <Navigation />
        <HeaderDetails />
        </div>

      </header>
    );
  }
