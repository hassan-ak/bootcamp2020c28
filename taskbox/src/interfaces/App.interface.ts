export interface HeaderProps {
    varient: string;
}

export interface FooterProps {
    aligned: string;
}

export interface TaskItem {
    id: number
    content: string
    archived: boolean
    pinned: boolean
}

export interface InitialStateT {
    TasksList: TaskItem[],
}