import React from "react";


export default function TaskPage({taskContent}) {
    return (
        <div className="flex flex-col  justify-center h-screen bg-stone-50 p-4 rounded-md shadow-md w-full">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-4xl font-bold mb-4 text-left"> {taskContent.title} </h1>
                <button className="px-4 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950   text-sm ">
                    Delete Project
                </button>
            </div>
            <h2 className="text-xl font-bold text-stone-700  text-left">{taskContent.dueDate}</h2>
            <p className="text-stone-500 text-base text-left">
                {taskContent.description}
            </p>
            <hr className="mt-4 mb-4" style={{ borderTop: "1px solid lightgrey" }}></hr>
            <label className="text-xl font-bold  ">
                Tasks
            </label>
            <div className="mb-4">

                <input
                    type="text"
                    id="task-name"
                    placeholder="Enter task name"
                    className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                />
                <button className="text-stone-700 hover:text-stone-950 text-sm font-bold  ml-2 px-4 py-1 rounded-md bg-stone-200 hover:bg-stone-300">
                    Add Task
                </button>
            </div>

            <div className="bg-sky-500 border-purple-500  flex  items-center gap-x-4 rounded-xl p-6">

                <ul className="list-disc ">
                    <div className="flex items-center  mb-4">
                        <p className="text-sm font-bold  text-left">
                            [Task List]
                        </p>
                        <button className="px-4 py-2 rounded-full  absolute  right-10  rounded-xl  text-stone-50 bg-red-500 hover:bg-red-700  text-sm ">
                            Delete Task
                        </button>
                    </div>
                    
                </ul>
            </div>

        </div>
    );
}