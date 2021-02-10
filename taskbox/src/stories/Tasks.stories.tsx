import Tasks from '../components/tasks';

const tasksStories = {
    title: 'Tasks',
    component: Tasks,
}
export default tasksStories;

export function Default(){
    return(
        <Tasks contnet="Task for Testing" archieved={false} pinned={false} id={1}/>
    )
}

export function Pinned(){
    return(
        <Tasks contnet="Task for Testing" archieved={false} pinned={true} id={1}/>
    )
}
export function Archieved(){
    return(
        <Tasks contnet="Task for Testing" archieved={true} pinned={false} id={1}/>
    )
}