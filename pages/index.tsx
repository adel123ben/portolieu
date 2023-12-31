import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from './composent/navbar'
import AbouteOne from './composent/abouteone'
import AboutTow from './composent/aboitetow'
import InfoModel from './composent/infoModel'
import interfaceModel from './api/hooks/useModel'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {isopen, closemodel} = interfaceModel();
  return (
    <>
      <Head>
        <title>My Potfolieu</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
     <InfoModel visible={isopen} onclose={closemodel}/>
    
     <NavBar />
     
     <div className='flex items-center mt-7  ml-44'>
      <AbouteOne />
     </div>
    </>
  )
}
