import React from 'react'
import ResumeCard from './ResumeCard'
import { FaCodepen, FaIdBadge, FaReact } from 'react-icons/fa'
import { BsDatabase } from 'react-icons/bs'

const Resume = () => {
  return (
    <section id="resume" className='scroll-mt-24 pt-20 pb-16'>
        <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
        {/* WORK PART */}
        <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
                My Work <span className='text-cyan-200'>Experience</span>
            </h1>
            <div className="mt-10" data-aos="zoom-in" data-aos-anchor-placement="top-center">
                <ResumeCard Icon={FaCodepen} role="Full-Stack Developer" />
                <ResumeCard Icon={FaReact} role="Frontend Developer" />
                <ResumeCard Icon={BsDatabase} role="Backend Developer" />
            </div>
        </div>
        {/* EDUCATION PART */}
        <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
                My <span className='text-cyan-200'>Education</span>
            </h1>
            <div className="mt-10" data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="300">
                <ResumeCard Icon={FaIdBadge} role="Bachelor's in Computer Science" date="Jan 2015 - Dec 2019" />
                <ResumeCard Icon={FaIdBadge} role="Master's in Software Engineering" date="Jan 2020 - Dec 2022" />
                <ResumeCard Icon={FaIdBadge} role="Certificate in Software Engineering" date="Jan 2020 - Dec 2022" />
            </div>
        </div>
        </div>
    </section>
  )
}

export default Resume