import { useState } from "react";

function ToDo() {

    const[tasks, setTasks] = useState([]);
    const[currentInput, setCurrentInput] = useState("")

    function handleChange(event) {
        setCurrentInput(event.target.value);

    }

    function addTask() {
        if(currentInput.trim() === "") return;
        setTasks([
            ...tasks,
            currentInput
        ]);
        setCurrentInput("");
    }

    function deleteTask(indexToDelete) {
        const updatedTasks = tasks.filter((task, index)=>{
            return index !== indexToDelete;
        })
        setTasks(updatedTasks);
    }

    function handleKeyDown(event) {
    if (event.key === "Enter") {
        addTask();
    }
}

    return(
        <div className="min-h-screen bg-linear-to-br from-pink-200 via-purple-200 to-blue-200 flex justify-center items-center">
           <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full">
             <h1 className="text-4xl font-bold text-center mb-6">
                My Todo List
             </h1>
             
            <input 
              type="text"
              placeholder="Enter a task..."
              value={currentInput}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-pink-300"
           />

           <button
            onClick={addTask}
            className="w-full mt-4 bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 rounded-xl transition"
            >
            Add Task
           </button>
          <div className="mt-6 space-y-3">
            {
             tasks.length === 0 && (
             <p className="text-center text-gray-400 mt-6">
               No tasks yet. Add one above! ✨
             </p>
                )
            }
            {
            tasks.map((task,index)=> {
                return(
                    <div 
                    key={index}
                    className="flex justify-between items-center bg-pink-50 p-4 rounded-xl mt-3 shadow-sm"
                    >
                        <p className="text-gray-700 font-medium">
                            {task}
                        </p>

                       <button
                       onClick={() => deleteTask(index)}
                       className="h-10 w-10 flex items-center justify-center rounded-lg bg-red-100 text-red-500 hover:bg-red-200 transition"
                       >
                        🗑️
                       </button>
                    </div>
                    
                )
            })
          }
          </div>
           </div>

        </div>
    )
}

export default ToDo;