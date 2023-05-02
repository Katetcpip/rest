import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import './styles.css'
import {Link} from 'react-router-dom'

const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function StartPage() {
  const parallax = useRef<IParallax>(null!)
  return (
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      <Parallax ref={parallax} pages={2}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <div className='flex flex-col w-full h-full items-center justify-center'>
               <p className='mt-auto text-7xl font-bold text-yellow-400'>Закажи домой поесть!</p>
               <img className='h-1/2 w-1/2 mr-auto' alt='' src='https://www.pngplay.com/wp-content/uploads/7/Nyan-Cat-PNG-Clipart-Background.gif'></img>
          </div>
          <img alt='' src='https://i.pinimg.com/originals/d8/1f/7c/d81f7ce108651728f64a2ff20fe59059.gif' className='absolute top-10 right-24 w-1/6 -rotate-12'></img>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>

          <Link to='/rest'>
            <div className='p-4 px-10 rounded-full bg-yellow-300 hover:bg-yellow-400 text-3xl relative transition hover:duration-700 font-semibold text-slate-700'>Начать покупки
                <img className='hover:scale-110 absolute top-8 -left-10 h-20 w-20 rotate-12' alt='' src='https://avatanplus.com/files/resources/original/5a76de234a2fb1616053b9e8.png'></img>
            </div>
          </Link>
        
        </ParallaxLayer>
 
      </Parallax>
    </div>
  )
}
