import { useState } from 'react';

function Todo() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [editingIndex,setEditingIndex] = useState(null);
    const [editedTask,setEditedTask] = useState("")

    function handleInput(e) {
        setNewTask(e.target.value);
    }
    function handleAdd() {
        if (newTask.trim() !== "") {
            setTasks((t) => [...t, newTask]);
            setNewTask("")
        }
        else alert("invalid");
    }
    function handleDelete(index) {
        const updatedList = tasks.filter((_, i) => i !== index);
        setTasks(updatedList)
    }
    function handleTaskUp(index) {
        if (index > 0) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
            setTasks(updatedTask)
        }
    }
    function handleTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedList = [...tasks];
            [updatedList[index], updatedList[index + 1]] = [updatedList[index + 1], updatedList[index]];
            setTasks(updatedList)
        }
    }
    function handleEdit(index){
        setEditingIndex(index);
        setEditedTask(tasks[index]);
    }
    function handleSave(index){
        const updatedTasks = [...tasks];
        updatedTasks[index] = editedTask;
        setTasks(updatedTasks);
        setEditingIndex(null);

    }
    return (
        <div className='todolist'>
            <h1 className='heading'>To-Do-List.</h1>
            <div>
                <input className='inputbx' type="text" placeholder='Write your task here...' value={newTask} onChange={handleInput} />
                <button className='addbtn' onClick={handleAdd}>+</button>
            </div>
            <ol >
                {
                tasks.map((task, index) =>
                    <li key={index}>
                        { editingIndex === index ? (
                        <>
                        <input className='editbx' type='text' value={editedTask} 
                        onChange={(e)=>setEditedTask(e.target.value)}
                        />
                        <button className='savebtn' onClick={()=> handleSave(index)}>Save</button> 
                        </>
                        ):(
                        <>
                        <span className='text'>{task}</span>
                        <button className='editbtn' onClick={()=> handleEdit(index)}>✏️</button>
                        <button className='deletebtn' onClick={() => handleDelete(index)} >-</button>
                        <button className='movebtn' onClick={() => handleTaskUp(index)}>▴</button>
                        <button className='movebtn' onClick={() => handleTaskDown(index)}>▾</button>
                        </>)
                        }</li>)}
            </ol>
        </div>
    );
}

export default Todo