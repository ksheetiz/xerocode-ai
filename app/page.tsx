'use client'

import Image from 'next/image'
import ClientOnly from './components/ClientOnly'
import Container from './components/Container'
import { Heading } from './components/Heading'
import { Input } from './components/Input'
import ItemsCard from './components/Cards/ItemsCard'
import FeatureCard from './components/Cards/FeatureCard'
import { useEffect } from 'react'
import FeatureCard1 from './components/Cards/FeatureCard1'



export default function Home() {

  

  return(
    <ClientOnly>
      <Container>

            {/* TOP SECTION */}

        <div className='flex flex-col'>
            <div className='hidden-cls'>
              <Heading title='Integrate AI Throughtout Your Workflow' combination="bg-gradient-to-r from-fuchsia-500 via-fuchsia-100 to-indigo-600" gradient center/>
            </div>
            <div className='mt-10 hidden-cls'>
              <Heading title='Code Doctor' center/>
            </div>
            <div className='mt-10 hidden-cls'>
              <Heading subtitle='Make process where AI collaborates with your team throughtout' center/>
              <Heading subtitle='the whole developement process.' center/>
            </div>
            <div className='mb-10 mt-5 hidden-cls'>
              <Input/>
            </div>
            <div className='flex justify-center items-center mt-10 relative hidden-cls'>
              <Image src="/images/robo-back.png" alt='background' className='absolute top-0' width="1200" height="1200" />
              <Image src="/images/robot.png" alt='Robot' width="1300" height="1300"/>
            </div>

            {/* MID SECTION */}

            <div className='mt-28 hidden-cls'>
              <Heading title='Boost the speed of your development and test' combination='bg-gradient-to-r from-indigo-600 to-fuchsia-500' gradient center/>
              <Heading title='cycles.' gradient center combination='bg-gradient-to-r from-indigo-600 to-fuchsia-500' />
              <Heading subtitle='With AI-driven test case generation and code analysis, problems may be found and fixed' center/>
              <Heading subtitle='more quickly.' center/>
              <div className='flex flex-row justify-start mt-16'>
                <ItemsCard item1='CI/CD Pipeline Generate' item2='Build / Deployment' width={96}/>
              </div>
              <div className='flex flex-row items-center h-auto justify-center mt-20 mb-40 xl:mt-20 xl:mb-20'>
                <div className='neon-circle xl:fixed relative'>
                </div>
                <div className=' absolute w-auto h-auto'>
                  <div className=' text-white text-center'>
                    <p className='font-thin text-5xl pb-3 font-sans'>CODE</p>
                    <p className='font-light text-5xl font-sans'>DOCTOR 👋</p>
                  </div>
                  <div className='hidden text-white text-center text-5xl'>
                    <p>WHAT CAN I</p>
                    <p>HELP</p>
                    <p>YOU WITH ?</p>
                  </div> 
                </div>
              </div>
              <div className='flex flex-row justify-end mt-12 mb-24'>
                <ItemsCard item1='Generate Test Cases' item2='Code Analysis' width={96} />
              </div>
            </div>

            {/* LOWER SECTION */}

            <div className='mt-14 hidden-cls'>
              <Heading title='Use AI to handle workflows in your chat platforms.' combination='bg-gradient-to-r from-indigo-600 to-fuchsia-500' gradient center/>
              
              <div className='flex flex-col md:flex-row justify-between items-center'>
                <FeatureCard title="ask questions" body="To assist with managing the development, testing, and 
                  deployment process, ask it questions or issue instructions." label="COMING SOON !"/>
                <FeatureCard title="execute" body="With a single command, you may run a series of tests or install a 
                  new version of a programme in a particular setting." label="COMING SOON !"/>
              </div>
              <div className='md:pl-40 md:pr-40 '>
                <FeatureCard1 title="Fix security concerns more quickly using generated code recommendations" body="With the aid of AI, recognise any security risk and swiftly and effectively fix it.
                granting developers the freedom they require to protect their work frequently and early"/>

              </div>

            </div>

            <div className='mt-24 hidden-cls'>
              <Heading title='Automate all aspects of your delivery process with' combination="bg-gradient-to-r from-fuchsia-500 via-fuchsia-100 to-indigo-600" gradient center/>
              <Heading title='AI support.' combination="bg-gradient-to-r from-fuchsia-500 via-fuchsia-100 to-indigo-600" gradient center/>
            </div>
            <div className='mt-12 hidden-cls'>
              <Heading subtitle='Get Early Access' center/>
              <Input/>
            </div>
          </div>
      </Container>

      {/* FOOTER */}

        <div className='mt-16 -mb-16 hidden-cls'>
            <p className='text-center text-white'>Copyright © 2023 <span className='font-bold'> EXOCODE TECHNOLOGIES </span> | ALL rights reserved</p>
        </div>
    </ClientOnly>
  )
}
