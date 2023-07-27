import Image from 'next/image'
import styles from './page.module.css'
import Form from '@/components/client/form'
import Scene from '@/components/server/scene'
import meshBg from '../public/mesh_bg.png'
import mobileBg from '../public/mobile_scene.svg'


export default function Home() {
  return (
    <main className='mainContainer'>
      <div className="hero">
        <h2 className='main_text'>Integrate AI Throughout Your Workflow</h2>
        <h1 className="company_name">Code doctor</h1>
        <p className="subheading">Make processes where AI collaborates with your team throughout the whole development process.</p>
        <Form placeholder='Your Email' btnAction='JOIN WAITLIST' />
        <div className="scene">
          <Scene />
          <Image src={mobileBg} className='mobile_bg' alt='mobile background' />
          <Image src={meshBg} alt='mesh background' className='meshbg' />
        </div>
      </div>
    </main>
  )
}
