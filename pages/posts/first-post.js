import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css'
import Layout from '../../components/layout';
import Script from 'next/script';


export default function FirstPost() {
  return (
    <Layout>
    <Head>
      <title>First Post</title>
    </Head>
      <h1>First Post</h1>
    </Layout>
  );
}