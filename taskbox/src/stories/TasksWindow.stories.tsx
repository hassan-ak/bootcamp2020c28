import TasksWindow from '../components/tasksWindow';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const tasksWindowStories = {
    title: 'Tasks Window',
    component: TasksWindow,
}
export default tasksWindowStories;

export function Empty(){
    return(
        <Provider store={store}>
            <TasksWindow varient="live"/>
        </Provider>
    )
}

export function WithTasks(){
    return(
        <Provider store={store}>
            <TasksWindow varient="test"/>
        </Provider>
    )
}