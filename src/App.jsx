import React from "react";
import { useState } from "react";
import Header from './components/Header.jsx';
import SideBar from './components/SideBar.jsx';
import CreateProject from "./components/CreateProject.jsx";
import TaskPage from "./components/TaskPage.jsx";



function App() {
  const [selectedPage, setselectedPage,] = useState();
  const [arrayOfProjects, setArrayOfProjects] = useState([]);
  const [taskPageContent, setTaskPageContent] = useState({
    title: null,
    description: null,
    dueDate: null,
    listOfTasks: [],
  });

  function handleTaskPicker(project) {
    setTaskPageContent({
      title: project.title,
      description: project.description,
      dueDate: project.dueDate,
    });
  }
  

  function handlePageChange(page) {
    setselectedPage(page);
  };

  function handleAddProject(userNewProjectInput) {
    setArrayOfProjects((prevArrayOfProjects) => {
      return [
        ...prevArrayOfProjects, // Copy previous state
        {
          title: userNewProjectInput.title,
          description: userNewProjectInput.description,
          dueDate: userNewProjectInput.dueDate,
        },
      ];
    });
  }


  



  let content = null;

  if (selectedPage === "createProject") {
    content = <CreateProject 
    onAddProject={handleAddProject} 
    onChangePage={handlePageChange}

    
    />;
  }
  else if (selectedPage === "taskPage") {
    content = <TaskPage 
    taskContent={taskPageContent}
    
    />;
  }
  else{
    content = <Header 
              isSelected={selectedPage === "createProject"}
              onClick={handlePageChange}
              />;
  }

  console.log("Selected Page:", selectedPage);
  console.log("Array of Projects:", arrayOfProjects);
 


  return (
    <>
    <div className="h-screen flex mt-8 mb-8 "> 
      <SideBar 
      onClickAddProject={handlePageChange}
      listOfProjects={arrayOfProjects}
      onTastPicker={handleTaskPicker}
      /> 
      {content}
     </div>
   
    <div className="flex flex-col md:flex-row gap-4">
      
      <main className="flex-1 bg-stone-50 p-4 rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-stone-600"> h</h2>
        <p className="text-stone-500">h</p>
      </main>
      <aside className="w-64 bg-stone-50 p-4 rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-stone-600">Sidebar</h2>
        <p className="text-stone-500">This is where the sidebar content goes.</p>
      </aside>
    </div>
    <footer className="mt-4 text-center text-stone-500">
      <p>&copy; 2023 Your Company</p>
      <p>All rights reserved.</p>
    </footer>
   

    
   
      
   </>
  );
}

export default App;
