import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import {updateDoc,doc,onSnapshot} from "firebase/firestore"
import {AiOutlineClose} from 'react-icons/ai'

const SavedShows = () => {
    const [movies, setMovies] = useState([]);
    const {user} = UserAuth();

    const slideleft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
      };
      const slideright = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
      };

    useEffect(() => {
        onSnapshot(doc(db,'users',`${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedShows)
        })
    }, [user?.email]);

    const movieRef = doc(db,'users',`${user?.email}`)
    const deleteShow = async (passedId) => {
        try{
            const result =movies.filter((item) => item.id !== passedId)
            await updateDoc(movieRef,{
                savedShows:result,
            })
        }catch(error){
            console.log(error)
        }
    }

  return (
    <>
      <h2 className="text-white font-bold p-4 md:text-2xl ">my shows</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideleft}
          className="bg-white rounded-full absolute left-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth relative"
        >
          {movies.map((item, id) => (
             <div className="w-[150px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative cursor-pointer p-2">
             <img
               className="w-full h-auto block"
               src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
               alt=""
             />
             <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
               <p className="whitespace-normal text-xs md:text-lg font-bold flex justify-center items-center h-full">
                 {item?.title}
               </p>
               <p onClick={()=>deleteShow(item.id)} className="absolute text-gray-300 top-4 right-4 "><AiOutlineClose/></p>
              
             </div>
           </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideright}
          className="bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default SavedShows;
