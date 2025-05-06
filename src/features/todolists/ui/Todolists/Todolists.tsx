import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import {TodolistItem} from "@/features/todolists/ui/Todolists/TodolistItem/TodolistItem.tsx";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {selectTodolists} from "@/features/todolists/model/todolists-selectors.ts";
import {FilterValues} from "@/app/App.tsx";

export type Todolist = {
    id: string
    title: string
    filter: FilterValues
}

export const Todolists = () => {
    const todolists = useAppSelector(selectTodolists)
    return (
        <Grid container spacing={4}>
            {todolists.map(todolist => {
                return (
                    <Grid key={todolist.id}>
                        <Paper sx={{p: '0 20px 20px 20px'}}>
                            <TodolistItem todolist={todolist}/>
                        </Paper>
                    </Grid>
                )
            })}
        </Grid>
    )
}