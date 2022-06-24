import { createGlobalStyle } from "styled-components"
export const darkMode ={
    body: '#23252F',
    fontColor:'white',
}
export const lightMode ={
    body: 'white',
    fontColor:'#23252F',
}
export const GlobalStyles = createGlobalStyle`
body{
    background-color: ${props=>props.theme.body}
}
`