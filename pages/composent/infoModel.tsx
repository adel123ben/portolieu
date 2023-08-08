import { AiOutlineSend, AiFillCloseCircle } from "react-icons/ai";
import interfaceModel from "../api/hooks/useModel";
import React, {useState, useEffect, useCallback} from "react"


interface InfoModelProps{
    visible?: boolean;
    onclose: any;
}

const InfoModel: React.FC<InfoModelProps> = ({
    visible,
    onclose
}) => {
    const [isvisible, setIsvisbel] = useState(!!visible)

    useEffect(() => {
        setIsvisbel(!!visible)
    }, [visible])

    const handelClose = useCallback(() => {
        setIsvisbel(false)
        setTimeout(() => {
            onclose();
        }, 300)
    }, [onclose])

    if(!visible){
        return null;
    }


    
    return(
        
        <div className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 ">
            <div className="relative w-auto flex mx-auto max-w-3xl rounded-md overflow-hidden">
                <div className={`${isvisible ? "scale-100" : "scale-0"} transform duration-300 relative flex flex-col bg-zinc-900 drop-shadow-md w-96`}>
                <AiFillCloseCircle onClick={handelClose} className="flex cursor-pointer" size={30} color="white"/>
                    <div className=" flex-col flex gap-4  h-96 items-center mt-24">
                        
                        <h1 className="text-white font-bold underline text-[20px]">Send me a messege</h1>
                        <input   placeholder="Your caption" type="text" className=" brightness-[60%] object-cover mt-7 py-2 rounded-md outline-none placeholder:ml-5 text-center   w-72" />
                        <input   placeholder="Your email" type="text" className=" brightness-[60%] object-cover mt-7 py-2 rounded-md outline-none placeholder:ml-5 text-center  w-72" />
                        <div className="flex flex-row mt-11">
                        <button  className="text-black bg-teal-300 px-10 rounded-md flex items-center">
                            Send
                            <AiOutlineSend className="ml-5" />
                        </button>
                       
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default InfoModel;