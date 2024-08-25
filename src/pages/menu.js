import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import MenuDetails from '../components/MenuDetails';

export default function Menu() {
  return (
    <main className='relative min-h-screen'>
      <SEO title="Menu Page" description="Welcome to the homepage of My Website, where you can find amazing content." />
      <section className='px-40'>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat min-h-screen"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-70" />
      <div className="relative w-full">
        <Navigation backgroundColor="bg-white"/>
        <MenuDetails />
      </div>
      </section>
    </main>
  );
}
