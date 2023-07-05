import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { getFeaturedEvents } from '../dymmyData'

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
    <div>
      <ul>
          <li>
              <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
              <Link href="/clients">Clients</Link>
          </li>
      </ul>
    </div>
      {/* <div>New compo</div>
      <div>
        <li>
          <Link href='/clients'>clients</Link>
        </li>
        <li>
          <Link href='/blog'>blog</Link>
        </li>
        <li>
        <Link href='/portfolio'>portfolio</Link>
        </li>
      </div> */}
    </>
  )
}
