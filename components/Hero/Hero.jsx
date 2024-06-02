import React from 'react'
import style from './hero.module.css'
import Image from 'next/image'
import pizza from '../../public/pizza.jpg'

const Hero = () => {
  return (
    <div className={style.container}>
        <div className={style.left}>
            <h1>Fuel, Medicine, Pleasure</h1>
            <p>What could it mean to give yourself the food you need to keep going? No punishing, no guilt, no withholding. Just nourishment.</p>
            <span>by Krista Diamond</span>
            <button>Help Us Fund More Stories</button>
        </div>
        <div className={style.right}>
            <Image src={pizza} alt="" className={style.heroImage}/>
        </div>
 
    </div>
  )
}

export default Hero