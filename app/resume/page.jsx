"use client";
import { FaHtml5, FaCss3, FaBootstrap, FaJs, FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
// about data 
const about = {
  title: 'About me',
  description: "I'm Full Stack Web Developer with a good knowledge of front end languages like HTML5,CSS3,Bootstrap,Java Script,Jquery, React, NextJs,NodeJs, ExpressJs, Core Java, Advance Java, SpringBoot, MySQL and MongoDB",
  info: [
    {
      filedName: "Name: ",
      filedValue: "Rushikesh Gorde"
    },
    {
      filedName: "Phone: ",
      filedValue: "(+91) 7820879747"
    },
    {
      filedName: "Expreance: ",
      filedValue: "1+ Years"
    },
    {
      filedName: "Skype: ",
      filedValue: "Rushikesh Gorde"
    },
    {
      filedName: "Nationality: ",
      filedValue: "Indian"
    },
    {
      filedName: "Email: ",
      filedValue: "rushikeshgorde1145@gmail.com"
    },
    {
      filedName: "Status: ",
      filedValue: "Open To Work"
    },
    {
      filedName: "Language: ",
      filedValue: "English, Hindi, Marathi"
    },
  ]
};

const expreance = {
  icon: '',
  title: 'My expreance',
  description: "I will work as a software developer trainee in numetry technologies for 4 months. In that I did 5+ projects on front end and 1 project on mern stack and full stack.",
  items: [
    {

      company: "Numetry technologies",
      position: "software developer traine",
      duration: "jan2024 - may:2024"
    },
    {

      company: "coding Sikho",
      position: "software developer intern",
      duration: "2024 - present"
    },
  ],
};
const education = {
  icon: '',
  title: 'My education',
  description: "I will work as a software developer trainee in numetry technologies for 4 months. In that I did 5+ projects on front end and 1 project on mern stack and full stack.",
  items: [
    {
      institution: "met bhujbal knowledge city college of engineering nashik",
      degree: "MCA(master of computer application)",
      duration: "2023-present",
    },
    {
      institution: "Coding Sikho insitute",
      degree: "software Developer",
      duration: "2023-present",
    },
    {
      institution: "Envision Computer Training Institute Private Limited Pune",
      degree: "Java Full Stack Web App Developer",
      duration: "2022-2023",
    },
    {
      institution: "padmashri vikhe patil college of arts science and commerce",
      degree: "BCS(bachelor of computer science)",
      duration: "2019-2022",
    },
    {
      institution: "New English School & Junior College Talegaon Dighe, Taluka Sangamner, Dist Ahmadnagar",
      degree: "HSC",
      duration: "2018-2019",
    },
    {
      institution: "New English School & Junior College Talegaon Dighe, Taluka Sangamner, Dist Ahmadnagar",
      degree: "SSC",
      duration: "2016-2017",
    },
  ],
};

const skills = {
  title: "My skills",
  description: "HTML5,CSS3,Bootstrap,Java Script,Jquery, React, NextJs,NodeJs, ExpressJs, Core Java, Advance Java, SpringBoot, MySQL and MongoDB",
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaBootstrap />,
      name: "bootStrap",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaJava />,
      name: " java",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindcss",
    },

  ],
}
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,

} from '@/components/ui/tooltip';

// import { ScrollArea } from '@radix-ui/scroll-area';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';


const Resume = () => {
  return <motion.div initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    }}
    className='min-h-[80vh] container flex items-center justify-center py-12 xl:py-0'
  >
    <Tabs
      defaultValue="expreance"
      className='flex flex-col xl:flex-row gap-[60px]'
    >
      <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
        <TabsTrigger value="expreance">Expreance</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="about">About me</TabsTrigger>
      </TabsList>
      <div className="min-h-[70vh] w-full">
        {/* Expreance  */}
        <TabsContent value="expreance" className="w-full">
          <div className='flex flex-col gap-[20] text-center xl:text-left'>

            <h3 className='text-4xl font-bold'>{expreance.title}</h3>
            <p className='max-w-[900px] text-white/60 mx-auto xl:mx-0'>{expreance.description}</p>
            <ScrollArea className="h-[350px]">
              <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                {expreance.items.map((item, index) => {
                  return (
                    <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start'>
                      <span className='text-accent'>{item.duration}</span>
                      <h3 className='text-xl  min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                      <div className="flex item-center gap-3">

                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                        {/* dot  */}
                        <p className='text-white/60'>{item.company}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </ScrollArea>
          </div>
        </TabsContent>
        {/* Education  */}
        <TabsContent value="education" className="w-full">
          <div className='flex flex-col gap-[20] text-center xl:text-left'>

            <h3 className='text-4xl font-bold'>{education.title}</h3>
            <ScrollArea className="h-[400px]">
              <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[20px]'>
                {education.items.map((item, index) => {
                  return (
                    <li key={index} className='bg-[#232329] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start'>
                      <span className='text-accent'>{item.duration}</span>
                      <h3 className='text-xl  min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                      <div className="flex item-center gap-3">

                       
                        <p className='text-white/60'>{item.institution}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </ScrollArea>
          </div>
        </TabsContent>
        {/* Skils  */}
        <TabsContent value="skills" className="w-full h-full">
          <div className="flex flex-col gap gap-[30] text-center xl:text-left">
            <div>
              <h3 className='text-4xl font-bold'>{skills.title}</h3>
              <p className='max-w-[900px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
            </div>
            <ul className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
              {skills.skillsList.map((skill, index) => {
                return <li key={index}>
                  <TooltipProvider delayDuration={100} >
                    <Tooltip>
                      <TooltipTrigger className='w-full h-[150px] bg-[#2b2b38] rounded-xl flex justify-center items-center group'>
                        <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                          {skill.icon}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className='capitalize'>
                          {skill.name}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              })}
            </ul>
          </div>
        </TabsContent>
        {/* About  */}
        <TabsContent value="about" className="w-full text-center xl:text-left">
          <div className='flex flex-col gap-[30px]'>
            <h3 className='text-4xl font-bold'>
              {about.title}
            </h3>
            <p className='maz-w-[900px] text-white/60 mx-auto xl:mx-0'>
              {about.description}
            </p>
            <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
              {about.info.map((item, index) => {
                return (
                  <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                    <span className='text-white/60'>
                      {item.filedName}
                    </span>
                    <span className='text-xl'>
                      {item.filedValue}
                      
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  </motion.div>;


}

export default Resume