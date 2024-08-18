import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title ? `${title} - My Website` : 'My Website'}</title>
      <meta name="description" content={description || "This is the default description for My Website."} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <meta name="keywords" content="your, keywords, here" />
      <meta name="author" content="Your Name" />
      {/* Add any other meta tags you might need */}
    </Head>
  );
}