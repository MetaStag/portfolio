import { useEffect, useState } from "react";
import { motion } from "motion/react";

const projects = [
  {
    name: "godc",
    description: "a dc implementation written in golang",
    link: "https://github.com/MetaStag/godc"
  },
  {
    name: "awesome-dots",
    description: "Dotfiles written for my AwesomeWM configuration",
    link: "https://github.com/MetaStag/awesome-dots"
  },
  {
    name: "led",
    description: "An ed (line editor) clone written in lua",
    link: "https://github.com/MetaStag/led"
  },
  {
    name: "RTV",
    description: "Reddit Terminal Viewer - browse reddit from your terminal!",
    link: "https://github.com/MetaStag/rtv"
  }
]

export default function App() {
  const [data, setData] = useState({})

  const handleClick = () => {
    window.open("https://github.com/MetaStag?tab=repositories", "_blank")
  }

  useEffect(()=> {
    fetch("https://api.github.com/users/MetaStag")
    .then((res)=>res.json())
    .then((data)=>setData(data))
    .catch((err)=>console.log(err))
  },[])
  return (
      <motion.div className="mx-12 my-12 grid grid-cols-3 gap-4" initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{duration:1, delay: 0.5, ease: "linear"}}>
        <motion.div className="bg-[#90E0EF] rounded-lg p-5 flex flex-col col-span-2" whileHover={{scale: 1.1}}>
          <span className="text-lg font-bold">About me</span>
          <span>Hey everyone! Im an aspiring full-stack developer</span>
        </motion.div>
        <motion.div className="bg-[#90E0EF] rounded-lg p-5 flex flex-col row-span-2" whileHover={{scale: 1.1}}>
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
        <motion.div className="bg-[#90E0EF] rounded-lg p-5 flex flex-col" whileHover={{scale: 1.1}}>
          <span className="text-[#0077B6] text-lg font-bold">Tech Stack</span>
          <div className="grid grid-cols-2 mt-5">
            <span>React & Next.js</span>
            <span>Express.js</span>
            <span>Mongodb & Firebase</span>
            <span>Python</span>
            <span>Linux</span>
            <span>Git/Github</span>
          </div>
        </motion.div>
        <motion.div className="bg-[#00B4D8] rounded-lg py-5 flex flex-col" whileHover={{scale: 1.1}}>
          <img src={data.avatar_url} alt="github icon" className="w-48 h-48 rounded-full self-center" />

            <span className="text-center underline font-bold">{data.name}</span>
            <span className="text-center">Repos: {data.public_repos}</span>
            <span className="text-center">Following: {data.following} | Followers: {data.followers}</span>
        </motion.div>
        <motion.div className="bg-[#90E0EF] rounded-lg p-5 flex flex-row" whileHover={{scale: 1.1}}>
          <img src="\img.webp" alt="main"/>
        </motion.div>
        <motion.div className="bg-[#90E0EF] rounded-lg p-5 flex flex-col" whileHover={{scale: 1.1}}>
          <span className="text-lg font-bold">Favorites</span>
          <span className="mt-5">💻Favorite distros - Ubuntu server & MX Linux</span>
          <span className="mt-2">🧑‍💻Favorite Code editor - VScode & Neovim</span>
          <span className="mt-2">🦊Favorite browser - Firefox </span>
        </motion.div>
        <motion.div className="bg-[#90E0EF] rounded-lg p-5 flex flex-col" whileHover={{scale: 1.1}}>
          <span className="text-[#0077B6] text-lg font-bold">Future Goals</span>
          <span>- Learn JWT and Firebase</span>
          <span>- Make an AI project</span>
          <span>- Practice fullstack</span>
        </motion.div>
      </motion.div>
  );
}