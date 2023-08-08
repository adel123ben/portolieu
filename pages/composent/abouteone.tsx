import { IoIosArrowForward } from "react-icons/io";
import Carousel from "./Carousel";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import React, {useCallback} from "react"
import interfaceModel from "../api/hooks/useModel";
import { useRouter } from "next/router";



const AbouteOne = () => {

    const {openmodel} = interfaceModel();

    const router = useRouter();
    

    const handelOpenModel = useCallback(() => {
        openmodel();
    }, [openmodel])
   
      
   
    return(
        <div className="flex items-center flex-col">
            <Carousel/>
            <div className="flex bg-gray-500 bg-opacity-40 w-auto py-3 px-20 rounded-md mt-10">
                <h1  className="text-white text-center ">Hello, I am full stack devellopeur in Algeria!</h1>
                
                </div>

                <div className="mt-7">
            <div className="flex items-center flex-row">
                <div className="items-center flex-row">
                    <h1 className="text-white font-bold text-[25px]">Adel Benmouhoub</h1>
                    <p className="text-white font-bold">Digital (/devlopeur/ios/android/full stack)</p>
                </div>
                <div className="flex flex-row">
                    <img className="flex items-center h-24 rounded-full ml-16 border" src="https://lh3.googleusercontent.com/a/AAcHTteouwbVjssah65INJVA8w6t7sMiUtWKnwXKNsjjcC8O=s288-c-no" alt="" />
                </div>
            </div>


            <div className="flex flex-row mt-10">
            <div>
                <h1 className="text-white underline text-[20px]">Work</h1>
                
            </div>

            
        </div>

        <p className="text-white text-[15px] w-96 gap-2 mt-2">Yoo I am a frilence developeur and i use react for frontend and nextjs and for styling taillwincss, I am from algeria i work on multype project on my life ande i clone facbbok and instagram app ande twiter an this is my portfolieur and i learn how i use firbase in my project for database ande i also work as a diffrent project..</p>
            


        <div className="flex flex-row mt-8">
           <button onClick={(e) => router.push('/works')} className="text-black bg-cyan-300 py-2 px-10 rounded-md flex items-center flex-row">
            My Portfolio

            <IoIosArrowForward className="ml-5" size={15} color="black" />
           </button>
           
        </div>


        <div className="flex mt-14 flex-col">
            <h1 className="text-white underline text-[20px]">Bio</h1>
            <div className="flex items-center mt-2">
                <h1 className="text-white"><span className="text-white font-bold mr-3">2007</span>Born in Algeria.</h1>
            </div>
            <div className="flex items-center mt-2">
                <h1 className="text-white w-96"><span className="text-white font-bold mr-3">2020</span>Start programing and developing some application ande posted in the web.</h1>
            </div>
        </div>


        <div className="flex flex-col mt-20">
            <div className="flex flex-col">
                <h1 className="text-white font-bold underline text-[20px]">On the web</h1>
            </div>
            <div className="flex items-center flex-row mt-7">
                
                <AiOutlineInstagram className="text-teal-300" size={20} />
                <h1 className="ml-2 text-teal-300">Follow meon Instagram now</h1>
            </div>
        </div>
        </div>

        

        

<div className="flex items-center mt-6">
    <div>
    <button onClick={handelOpenModel} className="text-black bg-cyan-300 py-2 px-10 rounded-md flex items-center flex-row">
            Sen me a messege

            <AiOutlineMail className="ml-5" size={15} color="black" />
           </button>
    </div>
</div>
        <div className="flex items-center mt-11 mb-11">
            <div>
                <p className="text-gray-400">
                    &copy; 2023 My portfolieu -- Adel Benmouhoub
                </p>
            </div>
        </div>
            </div>

            

            
    
       

       
    )
}

export default AbouteOne;