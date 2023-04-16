import React from 'react'
import ProjectItem from './ProjectItem'
import PropertyImage from '/public/assets/projects/property.jpg'
import CryptoImage from '/public/assets/projects/crypto.jpg'
import NetflixImage from '/public/assets/projects/netflix.jpg'
import TwitchImage from '/public/assets/projects/twitch.jpg'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem title={'Property Finder'} description={'React JS'} backgroundImage={PropertyImage} projectUrl={'/property'} />
          <ProjectItem title={'Crypto App'} description={'React JS'} backgroundImage={CryptoImage} projectUrl={'/crypto'} />
          <ProjectItem title={'Netflix App'} description={'React JS'} backgroundImage={NetflixImage} projectUrl={'/netflix'} />
          <ProjectItem title={'Twitch UI'} description={'React JS'} backgroundImage={TwitchImage} projectUrl={'/twitch'} />
        </div>
      </div>
    </div>
  )
}

export default Projects
