interface MobilMenuProps{
    visible?: boolean;
}

const MobilMenu: React.FC<MobilMenuProps> = ({
   visible
}) => {
if(!visible){
    return null;
}

    return(
        <div className=" w-56 absolute bg-slate-600 top-16 py-5 right-6 rounded-md  flex-col border-2 border-zinc-800 flex delay-300 duration-150 transition">
            <div className="flex flex-col gap-4">
                <div className="text-white px-3 text-center hover:underline">
                    Folow me on instagram
                </div>
            </div>
        </div>
    )
}

export default MobilMenu;