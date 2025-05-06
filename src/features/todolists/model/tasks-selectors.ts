import type {RootState} from '@/app/store.ts'
import {TasksState} from "@/features/todolists/ui/Todolists/TodolistItem/Tasks/TasksItem.tsx";

export const selectTasks = (state: RootState): TasksState => state.tasks
