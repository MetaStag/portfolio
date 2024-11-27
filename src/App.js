import React, { useEffect, useState } from "react";
import { motion } from "motion/react"; // For animation
import toast, { Toaster } from "react-hot-toast";
import './style.css' // Themes + animation style
import { projects, favorites, future } from "./data"; // Content

// Tech Stack Icons
import ReactIcon from "./Icons/react.svg"
import MongoIcon from "./Icons/mongo.svg"
import LinuxIcon from "./Icons/linux.svg"
import ExpressIcon from "./Icons/express.svg"
import PythonIcon from "./Icons/python.svg"
import GithubIcon from "./Icons/github.svg"

export default function App() {
  const [data, setData] = useState({}) // For GitHub API data
  const [toggle, setToggle] = useState("light"); // State to manage current theme

  const toggleSwitch = () => {
    const newToggle = (toggle==="light" ? "dark" : "light")
    setToggle(newToggle)
    if (newToggle==="light") return
    toast('Batman Mode',
      {
        style: {
          borderRadius: '10px',
          backgroundColor: '#313244',
          color: '#94e2d5'
        }
      }
    )
  }
  
  // For toggle animation
  const spring = {
      type: "spring",
      stiffness: 700,
      damping: 30
  }

  // For project div header
  const handleClick = () => {
    window.open("https://github.com/MetaStag?tab=repositories", "_blank")
  }

  // Fetch GitHub API data
  useEffect(()=> {
    fetch("https://api.github.com/users/MetaStag")
    .then((res)=>res.json())
    .then((data)=>setData(data))
    .catch((err)=>console.log(err))
  },[])
  
  return (
    <div>
    {/* Dark theme Notification */}
    <div><Toaster 
      position="top-center"   
      containerStyle={{
        top: 0,
      }} 
    /></div>
    
    <div className={`app ${toggle} min-h-screen p-4`}>

      {/* Navbar */}
      <div className={`div ${toggle} py-6 px-4 rounded-xl flex justify-between items-center`}>
        <span className="font-bold flex-1">MetaStag</span>
        <div className="flex items-center space-x-12">
        <div className={`app ${toggle} switch`} data-toggle={toggle} onClick={toggleSwitch}>
          <motion.div className="handle" layout transition={spring} />
        </div>
        <span className="hidden sm:inline">Projects</span>
        <span className="hidden sm:inline">About</span>
        <a href="https://github.com/MetaStag" target="_blank" rel="noreferrer">Contact</a>
        </div>
      </div>
      
      {/* Main Bento Grid */}
      <motion.div className="mx-12 my-12 grid grid-cols-1 lg:grid-cols-3 gap-4" initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{duration:1, delay: 0.5, ease: "linear"}}>
        
        <motion.div className={`div ${toggle} rounded-lg p-5 flex flex-col lg:col-span-2`} whileHover={{scale: 1.1}}>
          <span className="text-lg font-bold">About Me</span>
          <span>Hey everyone! Im an aspiring full-stack developer</span>
        </motion.div>

        <motion.div className={`div ${toggle} rounded-lg p-5 flex flex-col row-span-2`} whileHover={{scale: 1.1}}>
          <div className="flex flex-row justify-between" onClick={handleClick}>
            <span className="text-lg font-bold">Projects</span>
            <svg width="64px" height="28px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="arrowRightTopIconTitle" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="arrowRightTopIconTitle">Arrow Right Top</title> <path d="M19 13V5h-8"></path> <path stroke-linecap="round" d="M19 5l-1 1"></path> <path d="M18 6L5 19"></path> </g></svg>
          </div>
          {projects && projects.map((item)=>(
            <>
            <a className="underline decoration-indigo-400 hover:text-lg hover:text-indigo-700 mt-5" target="_blank" rel="noreferrer" href={item.link}>{item.name}</a>
            <span className="mb-2">- {item.description}</span>
            </>
          ))}
        </motion.div>

        <motion.div className={`div ${toggle} rounded-lg p-5 flex flex-col`} whileHover={{scale: 1.1}}>
          <span className="text-[#0077B6] text-lg font-bold">Tech Stack</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 p-2">
            <span><img src={ReactIcon} className="inline w-8 px-1 py-2" alt="React icon"></img>React & Next.js</span>
            <span><img src={ExpressIcon} className="inline w-8 px-1 py-2" alt="Next icon"></img>Express.js</span>
            <span><img src={MongoIcon} className="inline w-8 px-1 py-2" alt="Next icon"></img>Mongodb & Firebase</span>
            <span><img src={PythonIcon} className="inline w-8 px-1 py-2" alt="Next icon"></img>Python</span>
            <span><img src={LinuxIcon} className="inline w-8 px-1 py-2" alt="Next icon"></img>Linux</span>
            <span><img src={GithubIcon} className="inline w-8 px-1 py-2" alt="Next icon"></img>Git/Github</span>
          </div>
        </motion.div>

        <motion.div className="bg-[#00B4D8] rounded-lg py-5 flex flex-col" whileHover={{scale: 1.1}}>
          <img src={data.avatar_url} alt="github icon" className="w-48 h-48 rounded-full self-center" />

            <span className="text-center underline font-bold">{data.name}</span>
            <span className="text-center">Repos: {data.public_repos}</span>
            <span className="text-center">Following: {data.following} | Followers: {data.followers}</span>
        </motion.div>

        <motion.div className={`div ${toggle} rounded-lg p-5 flex flex-row justify-center`} whileHover={{scale: 1.1}}>
          <img className="w-[300px]" src="\img.webp" alt="main"/>
        </motion.div>

        <motion.div className={`div ${toggle} rounded-lg p-5 flex flex-col`} whileHover={{scale: 1.1}}>
          <span className="text-lg font-bold mb-3">Favorites</span>
          {favorites.map((item)=>(
            <span className="mt-2">{item.title} - {item.names}</span>
          ))}
        </motion.div>

        <motion.div className={`div ${toggle} rounded-lg p-5 flex flex-col`} whileHover={{scale: 1.1}}>
          <span className="text-[#0077B6] text-lg font-bold mb-3">Future Goals</span>
          {future.map((item)=>(
            <span>- {item}</span>
          ))}
        </motion.div>
      </motion.div>
    </div>
    </div>
  );
}