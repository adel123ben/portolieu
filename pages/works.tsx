import { AiOutlineArrowLeft } from "react-icons/ai"
import { useRouter } from "next/router"
import { SiNintendogamecube } from "react-icons/si";
import { BiLogoGithub,BiMenuAltRight } from "react-icons/bi";
import { useState, useCallback } from "react";
import React from "react";
import MobilMenu from "./composent/mobilMenu";
import { MdRestaurantMenu } from "react-icons/md";


const Works = () => {
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
        <div className="flex flex-col transform transition-transform duration-500 delay-300 translate-y-0 opacity-100">
            
        <div style={{backdropFilter: "blur(10px)"}} className="px-4 py-4 ml-10 flex sticky top-0 w-auto bg-zinc-800 border-blue-100">
            <div onClick={(e) => router.push('/')} className="flex items-center justify-center  ">
                <SiNintendogamecube size={25} color="white" />
                <h1  className="text-white font-bold ml-1 w-full text-[20px]">AdelBenmouhoub</h1>
            </div>

            <div className="flex items-center flex-row">
                <div className="flex items-center flex-row">
                    <p onClick={(e) => router.push('/works')} className="text-black py-2 px-2 underline font-bold bg-cyan-300 hover:text-gray-400 transition delay-300 duration-150 w-full items-center ml-8">Works</p>
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
        <div className="ml-52 mt-8">
        <img className='flex items-center h-96 w-96' src="https://www.rlogical.com/wp-content/uploads/2020/07/react-js-developer.png" alt="" />
        </div>
        
    
            <div className="flex flex-row px-40 py-16">
                <div>
                    <h1 className="text-white text-[15px] font-bold">Works</h1>
                    <div className="flex flex-row">
                    <div className="mt-7">
                        <img className=" h-32 rounded-lg transition transform hover:scale-150  " src="https://images.fonearena.com/blog/wp-content/uploads/2022/11/Instagram-Web.jpg" alt="" />
                        <p className="text-white text-center text-[17px] mt-3 font-semibold">Instagram clone</p>
                    </div>
                    <div className="mt-7">
                        <img className=" h-32 rounded-lg ml-5 transition transform hover:scale-150" src="https://i.insider.com/5e8743008427e9293d63a3e3?width=750&format=jpeg&auto=webp" alt="" />
                        <p className="text-white text-center text-[17px] mt-3 font-semibold">Facbook clone</p>
                    </div>
                    </div>


                    <div className="flex flex-row">
                    <div className="mt-7">
                        <img className=" h-32 rounded-lg transition transform hover:scale-150 " src="https://media.newyorker.com/photos/611d20a958fdd722890e7697/master/w_2560%2Cc_limit/Chayka-SocialMediaInterfaceChanges.jpg" alt="" />
                        <p className="text-white text-center text-[17px] mt-3 font-semibold">Tweeter clone</p>
                    </div>
                    <div className="mt-7">
                        <img className=" h-32 rounded-lg ml-5 transition transform hover:scale-150" src="https://assets3.thrillist.com/v1/image/2878475/792x408/scale;webp=auto;jpeg_quality=60;progressive.jpg" alt="" />
                        <p className="text-white text-center text-[17px] mt-3 font-semibold">Neflix clone</p>
                    </div>
                    </div>
                    
                </div>

                
            </div>




            <div className="flex flex-row items-center justify-center mt-11 mb-11">
            <p className="text-gray-400">
                    &copy; 2023 My portfolieu -- Adel Benmouhoub
                </p>
            </div>
        </div>
    )
}

export default Works