import React from 'react'
import {motion} from 'framer-motion';
import {styles} from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto">
        <div
        className={`${styles.paddingX} absolute insert-0 top-[120px] maxw-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
            <div className='w-1 sm:h-80 h-40 violet-gradient'/>
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I am <span className='text-[#915eff]'>Syed Tihaam Ahmad</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I am jack of all trades, master of few : <br className='sm:block hidden'/>
              Data Science, Data Engineering, Quantum Information Science and Embedded Systems.
            </p>
          </div>
        </div>
        <ComputersCanvas/>
    </section>
  )
}

export default Hero