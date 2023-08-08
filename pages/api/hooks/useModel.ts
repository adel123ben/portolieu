import {create} from "zustand";

export interface ModelProps{
    isopen: boolean;
    openmodel: () => void
    closemodel: () => void
}

const interfaceModel = create<ModelProps>((set) => ({
    isopen: false,
    openmodel: () => set({isopen: true}),
    closemodel: () => set({isopen: false})
}))

export default interfaceModel;