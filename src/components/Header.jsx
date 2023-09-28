"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import logo from './img/itbalogo-removebg-preview.png'
import styles from './styles/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const router = usePathname();

  return (
    <div className={`${styles.nav} flex justify-between items-center`}>
    <div className={styles.navHeader}>
      <div className={styles.navTitle}>
        <Image src={logo} alt="Bank Logo" width={60} height={50} />
      </div>
    </div>
    <div className={styles.navBtn}>
      <label htmlFor="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    
    <div className={styles.navLinks}>
    <Link href='/' className={router == "/" ? "active" : ""}>Inicio</Link>
    <Link href='/cuenta' className={router === '/cuenta' ? 'active' : ''}>Cuenta</Link>
    <Link href='/transferencias' className={router === '/transferencias' ? 'active' : ''}>Transferencias</Link>
    <Link href='/pagos' className={router === '/pagos' ? 'active' : ''}>Pagos</Link>
    <Link href='/ayuda' className={router === '/ayuda' ? 'active' : ''}>Ayuda</Link>
    <Link href='/iniciar-sesion' className={router === '/iniciar-sesion' ? 'active' : ''}>Iniciar Sesion</Link>

    </div>
  </div>
  )
}

export default Header