import { createContext,useRef,useState } from "react";
const dataProvider=createContext();
function ContextProvider({children}){
    const[TopAlbum,setTopAlbum]=useState([]);
    const[newAlbum,setNewAlbum]=useState([]);
    const[Songs,setSongsData]=useState([]);
    const[FAQdata,setFAQdata]=useState([]);
    const optionData=useRef([]);
    const SingerInfo=useRef([]);
    const[genre,setGener]=useState([]);
    const[modalOpen,setModalOpen]=useState(false);
    const[currentSong,setCurrentSong]=useState([]);
    return(
        <dataProvider.Provider value={{TopAlbum,setTopAlbum,newAlbum,setNewAlbum,Songs,setSongsData,FAQdata,setFAQdata,optionData,SingerInfo,genre,setGener,modalOpen,setModalOpen,currentSong,setCurrentSong}}>
            {children}
        </dataProvider.Provider>
    )
}
export {dataProvider,ContextProvider};