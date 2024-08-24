import SEO from '../components/SEO';
import Layout from '../components/Layout';

export default function Menu() {
  return (
    <>
      <SEO title="Menu Page" description="Welcome to the homepage of My Website, where you can find amazing content." />
      <Layout>
      <h1>Welcome to My Website</h1>
      <p>This is the home page. Here you can find all the latest updates and information about our services.</p>
      </Layout>
    </>
  );
}
