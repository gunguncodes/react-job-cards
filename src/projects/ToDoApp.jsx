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

    }

    return(
        <div>
           <input 
              value={currentInput}
              onChange={handleChange}
           />
           <p>{currentInput}</p>

           <button onClick={addTask}>
            Add Task
           </button>
          {
            tasks.map((task,index)=> {
                return(
                    <div key={index}>
                        <p>{task}</p>

                        <button onClick={()=>deleteTask(index)}>
                            delete
                        </button>
                    </div>
                    
                )
            })
          }

        </div>
    )
}

export default ToDo;