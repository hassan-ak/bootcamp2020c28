import React from 'react'
// Redux imports
import { useSelector } from 'react-redux';
import  Tasks  from '../tasks';
import './tasksWindow.css'
import { TasksWindowProps, InitialStateT } from '../../interfaces/App.interface';

// Data to be used in the App
const InitialState: InitialStateT = {
    TasksList: [
        { id: 1, content: "Test1", archived: false, pinned: false, },
        { id: 2, content: "Test2", archived: false, pinned: false, },
        { id: 3, content: "Test3", archived: true, pinned: false, },
        { id: 4, content: "Test4", archived: false, pinned: true, },
    ]
}

const TasksWindow: React.FC<TasksWindowProps> = ({ varient }) => {
    const tasks = useSelector((state: InitialStateT) => state)
    const taskListI = varient === "live" ? tasks.TasksList : InitialState.TasksList;
    const aTasks = taskListI.filter(Task => Task.archived === true)
    const bTasks = taskListI.filter(Task => Task.pinned === true)
    const dTasks = taskListI.filter(Task => Task.pinned !== true && Task.archived !== true)
    const taskList = [...bTasks, ...dTasks, ...aTasks]

    if (taskList.length === 0) {
        return (
            <div className="taskScreen taskScreenE">
                <p>No Tasks</p>
            </div>
        )
    }

    return (
        <div className="taskScreen">
            {taskList.map(task =>
                <Tasks
                    key={task.id}
                    id={task.id}
                    contnet={task.content}
                    archieved={task.archived}
                    pinned={task.pinned}
                />
            )}
        </div>
    )
}

export default TasksWindow;