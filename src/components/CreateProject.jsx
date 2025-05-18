import React from "react";
import { useState } from "react";

export default function CreateProject({ onAddProject, onChangePage}) {


    const [userNewProjectInput, setUserNewProjectInput] = useState({
        title: null, 
        description: null, 
        dueDate: null,
      });

    
  function handleUserNewProjectInputChange(inputIdentifier, newValue) {
    // Update state using previous state to ensure consistency
    setUserNewProjectInput((prevUserInput) => {
      return {
        ...prevUserInput, // Copy previous state
        [inputIdentifier]: newValue, // Update specific field (+ converts string to number)
      };
    });
  }
  console.log("User Input:", userNewProjectInput);
  

    return (
        <div className="flex flex-col  justify-center h-screen bg-stone-50 p-4 rounded-md shadow-md w-full">
            <h1 className="text-xl font-bold mb-4 text-center">Create a New Project</h1>
             
             
            <form 
            className="w-full max-w"
            onSubmit={() => {
               
                onAddProject(userNewProjectInput);
                onChangePage("");
               
            }}>
               <div className="w-full relative flex justify-end">
                 <button
                    type="button"
                    className="mr-5 px-4 py-2 rounded-md bg-stone-950 text-stone-50 hover:bg-stone-800  mt-4 text-base font-semibold"
                    onClick={() => onChangePage("")}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950  mt-4 text-base font-semibold" 
                >
                    Save
                </button>
               
                </div>
          
                <div className="mb-4">
                    <label className="text-sm font-bold uppercase text-stone-500">
                        Title
                    </label>
                    <input
                        type="text"
                        required
                        id="project-name"
                        placeholder="Enter project name"
                        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
                        onChange={
                        (event) => handleUserNewProjectInputChange("title", event.target.value) 
                        }
                    />
                </div>
                <div className="mb-4">
                    <label className="text-sm font-bold uppercase text-stone-500">
                        Description
                    </label>
                    <textarea
                        id="project-description"
                        required
                        placeholder="Enter project description"
                        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
                        onChange={
                        (event) => handleUserNewProjectInputChange("description", event.target.value) 
                        }
                    ></textarea>
                </div>
                 <div className="mb-4">
                    <label className="text-sm font-bold uppercase text-stone-500">
                        Due Date
                    </label>
                    <input
                        type="date"
                        id="project-due-date"
                        required
                        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
                        onChange={
                        (event) => handleUserNewProjectInputChange("dueDate", event.target.value) 
                        }
                    />

                 </div>
                
            </form>
        </div>
    );
}