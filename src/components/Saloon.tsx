"use client";

import Image from 'next/image';
import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import styles from "@/styles/Saloon.module.css";

const images = {
  floor: '/assets/pxArtFloor.png',
  bar: '/assets/bar2.png',
  barman: '/assets/pxArtBarman.png',
  women: '/assets/pxArtWomen.png',
  seriff: '/assets/pxArtSeriff.png',
  customer1: '/assets/pxArtCustomer1.png',
  customer2: '/assets/pxArtCustomer2.png',
  pianist: '/assets/pxArtPianist.png',
  wall: '/assets/wall.png',
  barrel: '/assets/fıcı.png',
  head: '/assets/head.png',
  gun: '/assets/gun.png'
};

export default function Saloon() {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const { connected } = useWallet();

  const handleBarmanClick = (): void => {
    if (connected) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  return (
    <div className={styles.saloonContainer}>
      <div className={styles.saloon}>
        <div className={styles.wall}>
          <Image src={images.wall} alt="Wall" layout="fill" objectFit="cover" />
        </div>
        <div className={styles.floor}>
          <Image src={images.floor} alt="Floor" layout="fill" objectFit="cover" />
        </div>
        <div className={styles.bar}>
          <Image src={images.bar} alt="Bar" layout="fill" objectFit="cover" />
        </div>
        <div className={styles.cabinet}>
          <Image src={images.barrel} alt="Cabinet" layout="fill" objectFit="cover" />
        </div>
        <div className={`${styles.accessory1} ${styles.hideable}`}>
          <Image src={images.head} alt="Head" layout="fill" objectFit="cover" />
        </div>
        <div className={`${styles.accessory2} ${styles.hideable}`}>
          <Image src={images.gun} alt="Gun" layout="fill" objectFit="cover" />
        </div>
        <div
          className={`${styles.character} ${styles.barman}`}
          id="barman"
          onClick={handleBarmanClick}
        >
          <Image src={images.barman} alt="Barman" layout="fill" objectFit="cover" />
        </div>
        <div className={`${styles.character} ${styles.customer1} ${styles.hideable}`} id="customer1">
          <Image src={images.customer1} alt="Customer 1" layout="fill" objectFit="cover" />
        </div>
        <div className={`${styles.character} ${styles.customer2} ${styles.hideable}`} id="customer2">
          <Image src={images.customer2} alt="Customer 2" layout="fill" objectFit="cover" />
        </div>
        <div className={`${styles.character} ${styles.women} ${styles.hideable}`} id="women">
          <Image src={images.women} alt="Women" layout="fill" objectFit="cover" />
        </div>
        <div className={`${styles.character} ${styles.piano} ${styles.hideable}`} id="piano">
          <Image src={images.pianist} alt="Pianist" layout="fill" objectFit="cover" />
        </div>
        <div className={`${styles.character} ${styles.seriff}`} id="seriff">
          <Image src={images.seriff} alt="Seriff" layout="fill" objectFit="cover" />
        </div>
      </div>
      
      {!connected && (
        <div className={styles.overlay}>
          <p>Lütfen salona girmek için cüzdanınızı bağlayın.</p>
        </div>
      )}
      
      {showAlert && (
        <div className={styles.alert}>
          Barmen: Hoş geldiniz! Ne içmek istersiniz?
        </div>
      )}
    </div>
  );
}