"use client"
import { SKILLS } from "@/app/constant/constant";
import Image from 'next/image';
import { useEffect, useState } from "react";
import Tilt from 'react-parallax-tilt';


const Skills = () => {

    const [shuffledSkills, setShuffledSkills] = useState(SKILLS);

    useEffect(() => {
        // Fisher–Yates Shuffle
        const shuffled = [...SKILLS].sort(() => Math.random() - 0.5);
        setShuffledSkills(shuffled);
    }, []);


    return (
        <section id="skills" className='scroll-mt-24 text-white pt-16 pb-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>My <span className='text-cyan-300'>Skills</span></h1>
            <div className='w-[70%] mx-auto flex flex-wrap justify-center gap-6 mt-16'>

                {shuffledSkills.map((skill, index) => (
                    <Tilt
                        key={index}
                        scale={1.5}
                        transitionSpeed={400}
                        className='flex items-center gap-2'>
                        <div
                            data-aos="flip-right" data-aos-anchor-placement="top-center" data-aos-delay={`${index * 100}`}
                            className='bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105'>
                            <div className="text-5xl mb-4">
                                <Image src={`${skill.icon}`} width={50} height={50} alt={`${skill.name} logo`} />
                            </div>
                            <p className='text-white mt-1'>{skill.name}</p>
                        </div>
                    </Tilt>
                ))}
            </div>
        </section>
    )
}

export default Skills