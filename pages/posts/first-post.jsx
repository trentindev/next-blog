import Link from 'next/link'
import Head from 'next/head';
import Layout from '../../components/layout';
//import Script from 'next/script';



export default function FirstPage() {
  return (
    <>
      <Head>
        <title>First Post</title>
        
      </Head>
      <h1 /*className={styles.title}*/>Premier Post</h1>
      <Link href="/">
        <h2>Retour à l'accueil</h2>
      </Link>
    </>
  )
}