import Head from 'next/head';
import Layout from '../../components/layout';


export default function FirstPost() {
  const entries = performance.getEntriesByType("navigation");
  entries.forEach((entry) => {
    console.log("SSR", entry.type);
  });
  return (
    <Layout>
    <Head>
      <title>First Post</title>
    </Head>
      <h1>First Post</h1>
    </Layout>
  );
}
export async function getServerSideProps() {
  const data = {};
  return {props: {data}}; 
}