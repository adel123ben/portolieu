import { SiNintendogamecube } from "react-icons/si";
import { BiLogoGithub,BiMenuAltRight } from "react-icons/bi";
import { useState, useCallback } from "react";
import React from "react";
import MobilMenu from "./mobilMenu";
import { MdRestaurantMenu } from "react-icons/md";
import AboutTow from "./aboitetow";
import { useRouter } from "next/router";



const NavBar = () => {
    const [show, setShow] = useState(false);

    const router = useRouter();

    const Icons = show ? MdRestaurantMenu : BiMenuAltRight;

    const togelMenu = useCallback(() => {
        setShow((curent) => !curent)
        setTimeout(() => {
            setShow
        }, 300)
    }, [setShow])
    return(
        <div style={{backdropFilter: "blur(10px)"}} className="px-4 py-4 ml-10 flex sticky top-0 w-auto bg-zinc-800 border-blue-100">
            <div className="flex items-center justify-center  ">
                <SiNintendogamecube size={25} color="white" />
                <h1 className="text-white font-bold ml-1 w-full text-[20px]">AdelBenmouhoub</h1>
            </div>

            <div className="flex items-center flex-row">
                <div className="flex items-center flex-row">
                    <p onClick={(e) => router.push('/works')} className="text-white hover:text-gray-400 transition delay-300 duration-150 w-full items-center ml-8">Works</p>
                </div>
                <div className="flex items-center flex-row">
                    <p className="text-white hover:text-gray-400 transition delay-300 duration-150 w-full items-center ml-8">Posts</p>
                </div>
                <div className="flex items-center flex-row">
                    <p className="text-white hover:text-gray-400 transition delay-300 duration-150 w-full items-center ml-8">User</p>
                </div>
                <div className="flex items-center flex-row">
                    <div className="flex items-center flex-row ml-7">
                    <BiLogoGithub size={20} color="white" />
                    </div>
                    
                    <p className="text-white hover:text-gray-400 transition delay-300 duration-150 w-full items-center ml-1 ">Source</p>
                </div>
            </div>


            <div onClick={togelMenu} className="flex items-center flex-row">
                <div className="flex items-center flex-row ml-40">
                <Icons className="flex bg-zinc-500 bg-opacity-40 rounded-md w-8 h-8 border-2 border-white" size={25} color="white"/>
                
                <MobilMenu visible={show} />
                </div>
                
            </div>

            
            
        </div>
    )
}

export default NavBar;