import TaskBox from '../components/taskBox';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const taskBoxStories = {
    title: 'TaskBox',
    component: TaskBox,
}
export default taskBoxStories;

export function TaskBoxComplete(){
    return(
        <Provider store={store}>
            <TaskBox/>
        </Provider>
    )
}