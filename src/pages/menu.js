import SEO from '../components/SEO';
import Navigation from '../components/Navigation';

export default function Menu() {
  return (
    <>
      <SEO title="Menu Page" description="Welcome to the homepage of My Website, where you can find amazing content." />
      <section className='px-40'>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-150"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <Navigation backgroundColor="bg-white"/>
      </section>
    </>
  );
}
