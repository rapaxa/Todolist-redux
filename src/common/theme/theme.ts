import {ThemeModeType} from "@/app/app-reducer.ts";
import {createTheme} from "@mui/material/styles";

export const getTheme = (themeMode:ThemeModeType) =>{
    return createTheme({
        palette: {
            mode: themeMode,
            primary: {
                main: '#087EA4',
            },
        },
    })
}
