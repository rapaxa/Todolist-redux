import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import type {FilterValues} from "@/app/App.tsx";
import {changeTodolistFilterAC} from "@/features/todolists/model/todolists-reducer.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {Props} from "@/features/todolists/ui/Todolists/TodolistItem/TodolistItem.tsx";
import {containerSx} from "@/common/styles/container.style.ts";


export const FilterButtons = ({todolist}: Props) => {
    const dispatch = useAppDispatch()
    const {id,filter} = todolist
    const changeFilterHandler = (filter: FilterValues) => {
        dispatch(changeTodolistFilterAC({id, filter}))
    }
    return (
        <Box sx={containerSx}>
            <Button variant={filter === 'all' ? 'outlined' : 'text'}
                    color={'inherit'}
                    onClick={() => changeFilterHandler('all')}>
                All
            </Button>
            <Button variant={filter === 'active' ? 'outlined' : 'text'}
                    color={'primary'}
                    onClick={() => changeFilterHandler('active')}>
                Active
            </Button>
            <Button variant={filter === 'completed' ? 'outlined' : 'text'}
                    color={'secondary'}
                    onClick={() => changeFilterHandler('completed')}>
                Completed
            </Button>
        </Box>
    )
}