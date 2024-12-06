import Image from "next/image";
import localFont from "next/font/local";
import { BsBell, BsBookmark, BsEnvelope, BsHash, BsTwitter } from "react-icons/bs";
import { BsHouseDoor } from "react-icons/bs";
import React from "react";
import { FiUser } from "react-icons/fi";
import FeedCard from "@/components/FeedCard";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


interface TwitterSidebarButton {
  title:string,
  icon:React.ReactNode
}

const sidebarMenuItems :TwitterSidebarButton[] = [
  {
    title:"Home",
    icon:<BsHouseDoor />
  },
  {
    title:"Explore",
    icon:<BsHash />
  }
  ,{
    title:"Notifications",
    icon:<BsBell />
  }
  ,{
    title:"Messages",
    icon:<BsEnvelope />
  }
  ,{
    title:"Bookmarks",
    icon:<BsBookmark />
  }
  ,{
    title:"Profile",
    icon:<FiUser />
  }
]

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 w-screen h-screen px-56">
        <div className="col-span-3 py-12">
          <div className="text-3xl h-fit w-fit hover:bg-slate-700 cursor-pointer rounded-full p-2" >
          <BsTwitter  />
          </div>
          <div className=" mt-4  cursor-pointer  text-xl  pr-4">
          <ul>
          {sidebarMenuItems.map((item,index) =>(
            
            <li key={index} className="flex  gap-4 mt-4 hover:bg-slate-700  py-2 px-4  rounded-full h-fit w-fit justify-start items-center">
              <span>{item.icon}</span>
              <span>{item.title}</span>
          </li>
        )
      )}
        </ul>
      </div>
      <button className="bg-[#1d9bf0] mt-4 rounded-full p-4  w-full -ml-4">Tweet</button>
        </div>
        <div className="col-span-6 border-r-2 border-l-2 h-screen overflow-scroll border-slate-600">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3">hello3</div>
      </div>
    </div>
  );
}
