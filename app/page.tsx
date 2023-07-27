import Image from 'next/image'
import Form from '@/components/client/form'
import Scene from '@/components/server/scene'
import meshBg from '../public/mesh_bg.png'
import mobileBg from '../public/mobile_scene.svg'
import FeaturesMenu from '@/components/server/FeaturesMenu'
import CircleAnim from '@/components/server/CircleAnim'
import Card from '@/components/server/Card'
import cardBgImg from '../public/cardsbg.png'
import cardCircleBgImg from '../public/cardCircleBg.png'


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
      <div className="features">
        <h2 className='main_text deployment'>Boost the speed of your development and test cycles.</h2>
        <p className='features_para'>With AI-driven test case generation and code analysis, problems may be found and fixed more quickly.</p>

        <div className="elaboration">
          <FeaturesMenu f1='CI/CD Pipeline Generate' f2='Build / Deploymnent' classN='feature_menu_1' />
          <CircleAnim />
          <FeaturesMenu f1='Generate Test Cases' f2='Code Analysis' classN='feature_menu_2' />
        </div>
      </div>

      <div className="about">
        <h2 className='about_heading'>Use AI to handle workflows in your chat platforms.</h2>
        <div className="cardcontainer">
          <Card heading='ask questions' subheading='To assist with managing the development, testing, and 
deployment process, ask it questions or issue instructions.' imgSrc={cardBgImg} buttontext='COMMING SOON' />
          <Card heading='execute' subheading='With a single command, you may run a series of tests or install a 
new version of a programme in a particular setting.' imgSrc={cardBgImg} buttontext='COMMING SOON' />
          <Card heading='Fix security concerns more quickly using generated code recommendations' subheading='With the aid of AI, recognise any security risk and swiftly and effectively fix it.
granting developers the freedom they require to protect their work frequently and early.' imgSrc={cardCircleBgImg} classN='third_card' />
        </div>
      </div>

      <div className="prefooter">
        <h2>
          Automate all aspects of your delivery process with
          AI support.
        </h2>
        <p>
          Get Early Access
        </p>
        <Form placeholder='Your Email' btnAction='JOIN WAITLIST' />
      </div>

    </main>
  )
}
