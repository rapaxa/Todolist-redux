import {CreateItemForm} from '@/common/components/CreateItemForm/CreateItemForm.tsx'
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {createTaskAC} from "@/features/todolists/model/tasks-reducer.ts";
import {FilterButtons} from "@/features/todolists/ui/Todolists/TodolistItem/FilterButtons/FilterButtons.tsx";
import {TasksItem} from "@/features/todolists/ui/Todolists/TodolistItem/Tasks/TasksItem.tsx";
import {TodolistTitle} from "@/features/todolists/ui/Todolists/TodolistItem/TodolistTitle/TodolistTitle.tsx";
import {Todolist} from "@/features/todolists/ui/Todolists/Todolists.tsx";


export type Props = {
    todolist: Todolist
}

export const TodolistItem = ({todolist}: Props) => {

    const dispatch = useAppDispatch()

    const createTaskHandler = (title: string) => {
        dispatch(createTaskAC({todolistId: todolist.id, title}))
    }

    return (
        <div>
            <TodolistTitle todolist={todolist}/>
            <CreateItemForm onCreateItem={createTaskHandler}/>
            <TasksItem todolist={todolist}/>
            <FilterButtons todolist={todolist}/>
        </div>
    )
}
