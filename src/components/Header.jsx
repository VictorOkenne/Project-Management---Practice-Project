import React from "react";
import logo from '../../public/logo.png';


export default function Header({isSelected, onClick}) {
  
  return (
   <div className=" w-full lex flex-col item-center  justify-center h-screen bg-stone-50 p-4 rounded-md shadow-md">
      <img
        src={logo}
        alt="A canvas"
        className="object-contain mb-8 w-44 h-20 mx-auto"
      />
      <h1 className=" text-center text-5xl font-bold">
        No Project
      </h1>
      <p className="flex flex-col gap-1 my-4 text-stone-500 text-base text-center"> Select a project or get started with one</p>
     <button 
     className="px-4 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 block mx-auto mt-4 text-base font-semibold"
     onClick={() => onClick("createProject")}
     > 
     Create new project
    </button>
    </div>

    

  );
}