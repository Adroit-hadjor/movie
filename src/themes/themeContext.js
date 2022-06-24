import React from "react";

export const themes = {
    dark:{
        color:"white",
        background:'#23252F'
    },
    light:{
        color:"#23252F",
        background:"white"
    }
}

const ThemeContext = React.createContext(themes.dark)

export default ThemeContext