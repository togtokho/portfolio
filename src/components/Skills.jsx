import Image from 'next/image'
import React from 'react'

const skills = [
  { name: 'c-sharp', caption: "C#" },
  { name: 'dotnetcore', caption: ".Net Core" },
  { name: 'sqlserver', caption: "Sql Server" },
  { name: 'html', caption: "HTML" },
  { name: 'css', caption: "CSS" },
  { name: 'javascript', caption: "JavaScript" },
  { name: 'typescript', caption: "TypeScript" },
  { name: 'angular', caption: "Angular" },
  { name: 'react', caption: "React" },
  { name: 'nextJS', caption: "Next" },
  { name: 'tailwind', caption: "Tailwind" },
  { name: 'github', caption: "Github" },
  { name: 'gitlab', caption: "Gitlab" },
  { name: 'docker', caption: "Docker" },
  { name: 'restapi', caption: "Rest API" },
  { name: 'graphql', caption: "GraphQL" }
]

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {
            skills.map((skill) => (
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={`/assets/skills/${skill.name}.png`} width={'64'} height={'64'} alt='/' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>{skill.caption}</h3>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Skills
