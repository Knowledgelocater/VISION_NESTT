import React from 'react'
import { Element , Link as LinkScroll } from 'react-scroll'
import Button from '../components/Button'

const Hero = () => {
  return (
    <section className='relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32'>
        <Element name='hero'>
            <div className='container'>
                <div className='relative z-2 max-w-512 max-lg:max-w-388'>
                    <div className='caption small-2 uppercase text-p3'>
                        Vision Nest
                    </div>
                    <h1 className='mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12'>Make your idea, ideal</h1>
                    <p className='max-w-440 mb-14 body-1 max-md:mb-10'>Helps you to grow your business easy and makes your idea to startup!! So , you know what to do?
                        Avail the offer now.
                    </p>
                    <LinkScroll to='features' offset={-100} spy smooth>
                    <Button icon="/images/zap.svg">Try it now</Button>
                    </LinkScroll>
                </div>
                <div className='absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none overflow-hidden hero-img_res'>
                    <img src="/images/Adobe Express - file.png" alt="hero" className='size-1230 max-lg:h-auto p-21vw w-full h-auto object-contain'/>
                </div>
            </div>
        </Element>
    </section>
  )
}

export default Hero
