import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {selectTasks} from "@/features/todolists/model/tasks-selectors.ts";
import List from "@mui/material/List";
import {changeTaskStatusAC, changeTaskTitleAC, deleteTaskAC} from "@/features/todolists/model/tasks-reducer.ts";
import type {ChangeEvent} from "react";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import {EditableSpan} from "@/common/components/EditableSpan/EditableSpan.tsx";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {Props} from "@/features/todolists/ui/Todolists/TodolistItem/TodolistItem.tsx";
import {getListItemSx} from "@/features/todolists/ui/Todolists/TodolistItem/Tasks/TaskItem.styles.ts";
export type Task = {
    id: string
    title: string
    isDone: boolean
}
export type TasksState = Record<string, Task[]>

export const TasksItem = ({todolist}: Props) => {
   const {id,filter} = todolist
    const tasks = useAppSelector(selectTasks)
    const dispatch = useAppDispatch()

    const todolistTasks:Task[] = tasks[id]
    let filteredTasks = todolistTasks
    if (filter === 'active') {
        filteredTasks = todolistTasks.filter(task => !task.isDone)
    }
    if (filter === 'completed') {
        filteredTasks = todolistTasks.filter(task => task.isDone)
    }
    return (
        filteredTasks.length === 0 ? (
            <p>Тасок нет</p>
        ) : (
            <List>
                {filteredTasks.map(task => {
                    const deleteTaskHandler = () => {
                        dispatch(deleteTaskAC({todolistId: id, taskId: task.id}))
                    }

                    const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        const newStatusValue = e.currentTarget.checked
                        dispatch(changeTaskStatusAC({todolistId: id, taskId: task.id, isDone: newStatusValue}))
                    }

                    const changeTaskTitleHandler = (title: string) => {
                        dispatch(changeTaskTitleAC({todolistId: id, taskId: task.id, title}))
                    }

                    return (
                        <ListItem key={task.id} sx={getListItemSx(task.isDone)}>
                            <div>
                                <Checkbox checked={task.isDone} onChange={changeTaskStatusHandler}/>
                                <EditableSpan value={task.title} onChange={changeTaskTitleHandler}/>
                            </div>
                            <IconButton onClick={deleteTaskHandler}>
                                <DeleteIcon/>
                            </IconButton>
                        </ListItem>
                    )
                })}
            </List>
        )
    )
}