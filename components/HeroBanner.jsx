import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import Image from 'next/image';

const HeroBanner = ({ heroBanner:  { image, smallText, midText, largeText1, product, buttonText, desc } }) => {
  

  return (
    <div className='hero-banner-container'>
      <div>
        <p className="beat-solo">{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        <Image src={urlFor(image)} alt="headphones" className='hero-banner-image' />

        <div>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{desc}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroBanner;