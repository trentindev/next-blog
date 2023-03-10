import Link from 'next/link'
//import styles from '../../styles/Home.module.css'


export default function FirstPage() {
  return (
    <>
      <h1 /*className={styles.title}*/>Premier Post</h1>
      <Link href="/">
        <h2>Retour à l'accueil</h2>
      </Link>
    </>
  )
}