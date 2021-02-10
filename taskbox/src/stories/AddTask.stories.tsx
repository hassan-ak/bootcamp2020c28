import AddTask from '../components/addTask';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const addTaskStories = {
    title: 'AddTask',
    component: AddTask,
}
export default addTaskStories;

export function Yellow(){
    return(
        <Provider store={store}>
            <AddTask varient="yellow"/>
        </Provider>
    )
}

export function Green(){
    return(
        <Provider store={store}>
            <AddTask varient="green"/>
        </Provider>
    )
}