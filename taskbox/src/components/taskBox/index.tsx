import React from 'react';
import AddTask from '../addTask';
import Footer from '../footer';
import Header from '../header';
import TasksWindow from '../tasksWindow';

const TaskBox = () => {
    return (
        <div>
            <Header varient={"elevatedTransparent"}/>
            <AddTask varient="green"/>
            <TasksWindow varient="live"/>
            <Footer aligned={"right"}/>
        </div>
    )
}

export default TaskBox;