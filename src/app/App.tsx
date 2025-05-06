import {ThemeProvider} from '@mui/material/styles'
import {useAppSelector} from '../common/hooks/useAppSelector'
import CssBaseline from '@mui/material/CssBaseline'
import {selectThemeMode} from "@/app/app-selectors.ts";
import {getTheme} from "../common/theme/theme.ts";
import {Header} from "@/common/components/Header/Header.tsx";
import {Main} from "@/app/Main.tsx";
import styles from '@/app/App.module.css'





export type FilterValues = 'all' | 'active' | 'completed'




export const App = () => {

    const themeMode = useAppSelector(selectThemeMode)
    const currentTheme = getTheme(themeMode)

    return (
        <ThemeProvider theme={currentTheme}>
            <div className={styles.app}>
                <CssBaseline/>
                <Header/>
                <Main/>
            </div>
        </ThemeProvider>
    )
}
