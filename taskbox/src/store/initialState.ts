import {InitialStateT} from '../interfaces/App.interface'

// Data to be used in the App
const InitialState: InitialStateT = {
    TasksList : [
        {
            id: 1,
            content: "Test1",
            archived: false,
            pinned: false,
        },
        {
            id: 2,
            content: "Test2",
            archived: false,
            pinned: false,
        },
        {
            id: 3,
            content: "Test3",
            archived: true,
            pinned: false,
        },
        {
            id: 4,
            content: "Test4",
            archived: false,
            pinned: true,
        },
    ]
}

// Data export
export { InitialState } 