import type {RootState} from '@/app/store.ts'
import {Todolist} from "@/features/todolists/ui/Todolists/Todolists.tsx";

export const selectTodolists = (state: RootState): Todolist[] => state.todolists
