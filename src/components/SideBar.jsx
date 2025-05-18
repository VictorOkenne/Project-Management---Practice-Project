import React from "react";

export default function SideBar({onClickAddProject, listOfProjects, onTastPicker}) {
    return (
        <aside className="  top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-black-50 dark:bg-stone-900">
                <h2 className="py-10 mb-8 font-bold uppercase md:text-xl text-stone-200">
                    Your Projects
                </h2>
                <ul className="flex flex-col gap-2 space-y-2 font-medium">
                    <button 
                    className="px-4 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                    onClick={() => onClickAddProject("createProject")}
                    >
                        + Add Project
                        
                    </button>
                    {listOfProjects.map((project, index) => (
                        <li key={index} className="flex  my-4  items-center justify-between  ">
                            <button className="px-5 py-1 text-sm font-sm w-full button-center text-stone-900 hover:text-stone-100 transition duration-500 rounded-full bg-stone-100 transition duration-300 hover:bg-stone-950"
                            onClick={() => {
                                onTastPicker(project);
                                onClickAddProject("taskPage")
                            
                            }}
                            >
                                {project.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}