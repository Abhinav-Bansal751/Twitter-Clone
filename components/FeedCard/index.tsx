import Image from "next/image";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaRetweet } from "react-icons/fa";
import { LuMessageCircleMore } from "react-icons/lu";
import { MdOutlineFileUpload } from "react-icons/md";



const FeedCard :React.FC = () =>{
    return <div className="border border-l-0 border-r-0 border-b-0 border-gray-600 py-4 transition-all gap-3">
        <div className="grid grid-cols-12  cursor-pointer hover:bg-slate-900">
        <div className="col-span-2  h-5 ">
            <Image src={"https://avatars.githubusercontent.com/u/118830821?v=4"}
             height={50}
              width={50}
              alt="user-image"
              className="rounded-xl ml-4"
              />
        </div>
        <div className="col-span-10">
            Abhinav Bansal 
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, aspernatur obcaecati! Culpa, delectus non iste veniam iure omnis at vero, ipsa ea, voluptas hic ab. Cum vitae laboriosam asperiores harum!
            </p>
            <div className="flex justify-between mt-3 text-xl w-[80%] "> 
                <div><LuMessageCircleMore /></div>
                <div><CiHeart /></div>
                <div><FaRetweet /></div>
                <div><MdOutlineFileUpload /></div>
            </div>
        </div>
        </div>

    </div>
}

export default FeedCard